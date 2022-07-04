/*
Read marker`s Comment word at currentTime
Return string
Can be use in sourceText and so on
Example :
  commentValue()           ---> Read thisLayer`s Comment key`s word at currentTime
  commentValue(index-1)    ---> Read upper layer`s Comment key`s word at currentTime
  commentValue(index+1)    ---> Read lower layer`s Comment key`s word at currentTime
  commentValue(N)          ---> Read Nth layer`s Comment key`s word at currentTime
*/
function commentValue(_index){
	if(arguments.length == 0){_index = index}
	_layer = thisComp.layer(_index)
    if(_layer.marker.numKeys != 0){
    ret = time>=_layer.marker.nearestKey(time).time
	?_layer.marker.nearestKey(time).index
    :--_layer.marker.nearestKey(time).index
	return ret!=0?_layer.marker.key(ret).comment:""}else{return ""}}
  commentValue()
