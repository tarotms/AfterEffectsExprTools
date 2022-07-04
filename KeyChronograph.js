/*
Set the timer to 0 at each key
Return number
Example :
KEY   :    o             o     o         o
RETURN:0-1-0-1-2-3-4-5-6-0-1-2-0-1-2-3-4-0-1-2
*/
function KeyChronograph(){
	_property = thisProperty
	if(_property.numKeys != 0){
		if(time<_property.key(1).time){
		return time}else{n = _property.nearestKey(time).index
		time>=_property.key(n).time?n:--n
		return time-_property.key(n).time}}else{return time}}
KeyChronograph()
