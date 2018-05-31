import _ from 'lodash'

/**
 * 多个两点之间关系连线，构成关系网， 任意选择两个点，运算两个点到搭路径的几种方式，行走路径
 */
class NodeToTarget {
  constructor(graphData, onId, targetId) {
    this.nodes = graphData.nodes
    this.links = graphData.links
    this.linksMap = new Map()
    this.onId = onId
    this.targetId = targetId
    this.higthLightLinks = []
    this.nodePath = [] // [[],[]] 可能为多个node路径，
    this.linkPath = [] // [[],[]] 可能为多个node路径
  }
  static init (graphData, onId, targetId) {
    return new NodeToTarget(graphData, onId, targetId)
  }
  run () {
    this.links.forEach((link) => {
      this.linksMap.set(link.id, link)
    })
    this.mouseFindTarget(this.linksMap, this.onId, this.targetId, [], [], [])
    console.log(this.higthLightLinks)
    console.log('nodePath', this.nodePath)
    console.log('linkPath', this.linkPath)
  }
  mouseFindTarget (linksMap, onId, targetId, higthLightLinks, nodePath, linkPath) {
    linksMap.forEach((linkValue, linkKey) => {
      let newlinksMap = _.clone(linksMap)
      let newhigthLightLinks = _.clone(higthLightLinks)
      let newnodePath = _.clone(nodePath)
      let newlinkPath = _.clone(linkPath)
      let linkIdSet = new Set()
      linkIdSet.add(linkValue.endNodeId)
      linkIdSet.add(linkValue.startNodeId)
      // 如果 当前links 的两端点 id 和新的onId 和 最终的targetId
      if (linkIdSet.has(onId) && linkIdSet.has(targetId) && onId !== targetId) {
        // 最后如果 最后能找到最终的targetId 则合并到this.higthLightLinks
        // 高亮的links总合集
        // 相同则将当前Link的id 加入需要高亮的队列
        newhigthLightLinks.push(linkKey)
        newnodePath.push(onId)
        newnodePath.push(targetId)
        newlinkPath.push(linkKey)
        this.higthLightLinks = _.concat(this.higthLightLinks, newhigthLightLinks)
        // 按照顺序加入的nodeId 路径
        this.nodePath.push(_.clone(newnodePath))
        // 按照顺序加入的 linkid 路径
        this.linkPath.push(_.clone(newlinkPath))
      } else if (linkIdSet.has(onId)){
        let newid
        newlinksMap.delete(linkKey)
        linkIdSet.delete(onId)
        newid =[...linkIdSet][0]
        // 相同则将当前Link的id 加入需要高亮的队列
        newhigthLightLinks.push(linkKey)
        newnodePath.push(onId)
        newlinkPath.push(linkKey)
          //没找到则重新赋值newid , 删除遍历过得newlinks 继续查找
        this.mouseFindTarget(newlinksMap, newid, targetId, newhigthLightLinks, newnodePath, newlinkPath)
      }
    })
  }
}
export default NodeToTarget
