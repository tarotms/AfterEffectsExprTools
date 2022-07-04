/*
Pointer another Layer`s anchorpoint
Return 2D degrees
Can be use in Rotation and so on
Example:
  pointer()           ---> from thisLayer`s anchorPoint pointer to upper layer`s anchorPoint
  pointer(index+1)    ---> from thisLayer`s anchorPoint pointer to lower layer`s anchorPoint
  pointer(N)          ---> from thisLayer`s anchorPoint pointer to Nth layer`s anchorPoint
*/
function pointer(_index){
    if(arguments.length == 0){_index = index - 1}
    _thisLayer=thisLayer
    _thisPoint=_thisLayer.toComp(_thisLayer.transform.anchorPoint)
    _targetLayer=thisComp.layer(_index)
    _targetPoint=_targetLayer.toComp(_targetLayer.transform.anchorPoint)
    _return=normalize(sub(_thisPoint,_targetPoint))
return radiansToDegrees(Math.atan2(_return[1],_return[0]))+180}
pointer()
