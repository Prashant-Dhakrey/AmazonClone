
const proudcts = []
export const getProductsreducer = (state=(proudcts),action) =>{

         switch(action.type){
            case "SUCCESS_GET_PRODUCTS":
                return{proudcts : action.payload}
            case "FAIL_GET_PRODUCTS":
                return{proudcts :action.payload}
            default : return state
         }
}