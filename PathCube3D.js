/*
Create 3D cube path
Return path object

Use steps :
  1.Create them layers looks like this : 
      Camera
      Null(Open 3D botton)
      PathLayer(2D)
  2.Add "Path" property and Running expression toPathLayer
  3.Add stroke property to PathLayer
  4.For fun
*/
function createCube(_size){
	_size = arguments.length==0?[100,100,100]:_size
	_sort = [0,4,6,2,0,1,5,4,5,7,6,7,3,1,3,2]
	cor = (arr,str,ind)=>arr[ind]*(str.charAt(str.length-(ind+1))*2-1)
	asixUpDate = (_cur,_ind,_arr)=>{
		_char = _ind.toString(2)
		_point = [cor(_size,_char,0),cor(_size,_char,1),cor(_size,_char,2)]
		return thisComp.layer(index-1).toComp(_point)}
	_sortFunc = (_cur,_ind,_arr)=>(_path[_sort[_ind]]-position).slice(0,2)
	_path = new Array(8).fill(0).map(asixUpDate)
	return new Array(_sort.length).fill(0).map(_sortFunc)}
createPath(createCube())
