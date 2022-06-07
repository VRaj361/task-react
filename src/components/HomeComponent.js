import { connect } from "react-redux";
import {addToCart} from "../services/actions/Action"
import {HomeContainer} from "../containers/HomeContainer"

const mapStateToProps=state=>({
    cdata:state
})
const mapDispatchToProps=dispatch=>({
    addToCart:p=>{dispatch(addToCart(p))}
})
export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer);