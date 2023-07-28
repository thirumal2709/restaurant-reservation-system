import axios from "axios";

const username = 'user';
const password = 'password';
const authHeader = `Basic ${btoa(`${username}:${password}`)}`;

const headers = {
  'Authorization': authHeader,
  'Content-Type': 'application/json',
}

const URI='http://localhost:8080'   
const URK ='http://localhost:9999'

const getProduct = () => axios.get(`${URI}/product/getadm`,{headers})
const addProduct = (Admin) => axios.post(`${URI}/admin/addadm`,Admin,{headers})
// const getProductbyId = (Admin_id)=> axios.get(`${URI}/product/find/${Admin_id}`)
const editProduct = (Admin_id   ,Admin)=>axios.put(`${URI}/product/updateadm/${Admin_id}`,Admin,{headers})
const deleteProduct=(Admin_id)=>axios.delete(`${URI}/product/deleteadm/${Admin_id}`,{headers})
const getFeedback = () => axios.get(`${URK}/getfed`,)
const addFeedback = (Feedback) => axios.post(`${URK}/addfed`,Feedback)
// const getProductbyId = (id)=> axios.get(`${URI}/product/find/${id}`)
const editFeedback = (feed_id,FeedBack)=>axios.put(`${URK}/updatefeed/${feed_id}`,FeedBack)
const deleteFeedback=(feed_id)=>axios.delete(`${URK}/delete/${feed_id}`)
export {getProduct,addProduct,editProduct,deleteProduct,getFeedback,addFeedback,editFeedback,deleteFeedback}