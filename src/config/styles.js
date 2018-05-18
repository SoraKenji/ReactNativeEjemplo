const React = require('react-native')
const {StyleSheet} = React
const constants = {
  actionColor: '#24CE84'
};

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1,
  },
  listview: {
    flex: 1,
  },
  buttonrsfalse:{
    flex: 1,
    height: 40,
    backgroundColor: '#253f3e',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
  },
  buttonrstrue:{
    flex: 1,
    height: 40,
    backgroundColor: '#326964',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
  },
  txinp:{
    width: 110, 
    borderColor: 'gray',
    borderWidth: 1,
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
    backgroundColor:"white",
  },
  txcost:{
    width:200,
    height:35, 
    borderColor: 'gray',
    borderWidth: 1,
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
    backgroundColor:"white",
  },
  li: {
    backgroundColor: 'transparent',
    borderBottomColor: 'rgba(46,14,14,1)',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  txtm: {
    fontSize:13,
    color:'white'
  },
    co: {
    backgroundColor: 'green',
    borderBottomColor: 'rgba(61, 61, 61, 0.5)',
    borderColor: 'transparent',
    borderWidth: 2,
    paddingLeft: 16,
    paddingTop: 12,
    paddingBottom: 12,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  liNext: {
    backgroundColor: 'green',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  liContainer: {
    flex: 2,
  },
  liText: {
    color: '#333',
    fontSize: 16,
  },
  navbar: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    justifyContent: 'center',
    height: 44,
    flexDirection: 'row'
  },
  navbarTitle: {
    color: '#444',
    fontSize: 16,
    fontWeight: "500"
  },
  statusbar: {
    backgroundColor: '#fff',
    height: 22,
  },
  txcenter: {
    textAlign: 'center', margin:10
  },
  txterror:{
    textAlign:'center', margin:2, fontSize:12,
    //fontWeight:'bold',
     color:'rgba(255,59,48,1)',
     backgroundColor:'transparent'
  },
  ptitleText:{
     color: '#fff',
    fontSize: 15,
    textAlign: 'center',
    fontWeight:'bold'
  },
   pdetalleText:{
     color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  
  actionText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  action: {
    backgroundColor: constants.actionColor,
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  modalCont:{
    flex:1,
    backgroundColor:'rgba(0,0,0,0.7)',
    justifyContent:'center',
    alignItems:'center',
  },
  modalList:{
   
   width:300, 
   justifyContent:'center', 
   borderWidth:1,
   borderColor:'#067644'
  },
   modalListMap:{
   flex:1, 
   alignItems:'center',
   justifyContent:'center',
   width:202, 
   marginTop:20, 
   marginBottom:20, 
   borderWidth:1,
   borderColor:'#067644'
  },
  wallpaper:{
    flex:1,
    width:null,
    height:null,
    //marginTop:20,
    alignItems: 'stretch',
    padding: 1
  },
  wallpaperBar:{
    flex:1,
    width:null,
    height:null,
    alignItems: 'stretch',
    padding: 1
  },
  backgrroundLogin:{
    flex:1,flexDirection: 'row',
    justifyContent: 'center',
    marginTop:30,
    backgroundColor: 'rgba(150, 116, 82, 0.7)',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginLeft: 40,
    marginRight: 40,
    alignItems:'center'
  },
    backgrroundLoginButton:{
      height: 45, width:240,
      flexDirection: 'row',
      justifyContent:'center',
      marginTop:5,
      backgroundColor:'#0d8651',
      borderBottomLeftRadius:5,
      borderBottomRightRadius: 5,
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      marginLeft: 40,
      marginRight: 40,
      alignItems: 'center',
      borderColor: '#067644',
      borderBottomWidth: 4
  },
      backgrroundModalButton:{
      height: 45, width:240,
    flexDirection: 'row',  justifyContent:'center',marginLeft:'7%',marginBottom:5,marginTop:5, backgroundColor:'#0d8651', borderBottomLeftRadius:5,
      borderBottomRightRadius:5,
       borderTopLeftRadius:5,
      borderTopRightRadius:5, alignItems:'center',borderColor:'#067644',borderBottomWidth:4
  },
        backgrroundModalUbic:{
      height: 45, width:200,
    flexDirection: 'row',  justifyContent:'center',backgroundColor:'#0d8651',
  alignItems:'center',borderColor:'#067644',borderBottomWidth:4
  },
      backgrroundHomeGreen:{
      height: 55, width:null,
        justifyContent:'space-between',
    flexDirection: 'row',marginTop:5, backgroundColor:'#0d8651', 
     alignItems:'center',borderColor:'#067644',borderBottomWidth:4
  },
  backgrroundHomeRed:{
    height: 55, width:null,
    justifyContent:'space-between',
    flexDirection: 'row',marginTop:5, backgroundColor:'#ea2e22',
    alignItems:'center',borderColor:'#d42719',borderBottomWidth:4,
  },
  backgrroundInput:{
    justifyContent:'center',marginTop:30,marginBottom:10, backgroundColor:'rgba(150, 116, 82, 0.7)', borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
    borderTopLeftRadius:5,
    borderTopRightRadius:5,marginLeft: 40,marginRight: 40, alignItems:'center'
  },
  backgrroundReg:{
    flex:2,flexDirection: 'row',  justifyContent:'center',marginTop:30, backgroundColor:'transparent', borderBottomLeftRadius:5,
    marginLeft: 40,marginRight: 40,
    borderBottomWidth: 1,
    borderColor: 'rgba(150, 116, 82, 0.7)',
  },
  whitext:{
    color:'white',fontWeight: 'bold'
  },
  whitextHome:{
    flex:1,
    color:'white',fontWeight: 'bold',
    fontSize:15,
    textAlign:'center',
  //marginLeft:'10%'
},
titletext:{
  color:'white',
  marginTop:10,
  marginLeft:10, 
  fontWeight:'bold'
}
  
})

module.exports = styles
module.exports.constants = constants;