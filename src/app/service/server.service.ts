import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  
  //put /api/ after your url e.g https://www.abc.com/api/
  url = "https://www.abcd.in/admin/api/";

  constructor(private http: HttpClient) { }

  welcome()
  {
    return this.http.get(this.url+'welcome')
             .pipe(map(results => results));
  }

  homepage(id,type)
  {
    if(localStorage.getItem('temp_user_id') && localStorage.getItem('temp_user_id') != undefined)
    {
      var temp:any = localStorage.getItem('temp_user_id');
    }
    else
    {
      var temp:any = Math.floor(Math.random() * 2000000000) + 1;

      localStorage.setItem('temp_user_id',temp);
    }

    return this.http.get(this.url+'homepage?lid='+localStorage.getItem('lid')+"&user_id="+localStorage.getItem('user_id')+"&city_id="+localStorage.getItem('city_id')+"&cate_id="+id+'&cart_no='+localStorage.getItem('cart_no')+"&lat="+localStorage.getItem("current_lat")+"&lng="+localStorage.getItem("current_lng")+"&store_type="+type+"&temp_user_id="+temp)
             .pipe(map(results => results));
  }

  item(id)
  {
    if(localStorage.getItem('temp_user_id') && localStorage.getItem('temp_user_id') != undefined)
    {
      var temp:any = localStorage.getItem('temp_user_id');
    }
    else
    {
      var temp:any = Math.floor(Math.random() * 2000000000) + 1;

      localStorage.setItem('temp_user_id',temp);
    }
    
    return this.http.get(this.url+'item?lid='+localStorage.getItem('lid')+"&user_id="+localStorage.getItem('user_id')+"&store_id="+id+"&lat="+localStorage.getItem("current_lat")+"&lng="+localStorage.getItem("current_lng")+"&temp_user_id="+temp)
             .pipe(map(results => results));
  }
  
  city()
  {
  	return this.http.get(this.url+'city?lid='+localStorage.getItem('lid'))
  	    	   .pipe(map(results => results));
  }

  page()
  {
    return this.http.get(this.url+'page?lid='+localStorage.getItem('lid'))
             .pipe(map(results => results));
  }

  
  makeStripePayment(data)
  {
    return this.http.get(this.url+'makeStripePayment'+data+'&lid='+localStorage.getItem('lid'))
             .pipe(map(results => results));
  }

  my(id)
  {
    return this.http.get(this.url+'my?id='+id+'&lid='+localStorage.getItem('lid'))
             .pipe(map(results => results));
  }

  getLang(id)
  {
    return this.http.get(this.url+'getLang?lang_id='+id)
             .pipe(map(results => results));
  }

  addToCart(data)
  {
    return this.http.post(this.url+'addToCart?lang_id='+localStorage.getItem('lid'),data)
             .pipe(map(results => results));
  }

  cartCount(id)
  {
    return this.http.get(this.url+'cartCount?lid='+localStorage.getItem('lid')+"&cart_no="+id)
             .pipe(map(results => results));
  }

  updateCart(id,type)
  {
    console.log(type+ "-=-=-=-");
    return this.http.get(this.url+'updateCart/'+id+'/'+type)
             .pipe(map(results => results));
  }

  getCart(cartNo)
  {
    console.log(cartNo + "-----getCart");
    return this.http.get(this.url+'getCart/'+cartNo+'?lid='+localStorage.getItem('lid')+"&lat="+localStorage.getItem("current_lat")+"&lng="+localStorage.getItem("current_lng"))
             .pipe(map(results => results));
  }

  getOffer(cartNo)
  {
    return this.http.get(this.url+'getOffer/'+cartNo+'?lid='+localStorage.getItem('lid'))
             .pipe(map(results => results));
  }

  applyCoupen(id,cartNo)
  {
    return this.http.get(this.url+'applyCoupen/'+id+'/'+cartNo+"&lat="+localStorage.getItem("current_lat")+"&lng="+localStorage.getItem("current_lng"))
             .pipe(map(results => results));
  }

  removeOffer(id,cartNo)
  {
    return this.http.get(this.url+'removeOffer/'+id+'/'+cartNo+"&lat="+localStorage.getItem("current_lat")+"&lng="+localStorage.getItem("current_lng"))
             .pipe(map(results => results));
  }

  order(data)
  {
    return this.http.post(this.url+'order'+"?lat="+localStorage.getItem("current_lat")+"&lng="+localStorage.getItem("current_lng"),data)
    .pipe(map(results => results));
  }

  login(data)
  {
    return this.http.post(this.url+'login',data)
             .pipe(map(results => results));
    var formdata = new FormData();
    // return this.http.post(`https://www.abcd.in/admin/appapi/userlogin.php?phone=${data.phone}&password=${data.password}`, formdata)
    // .pipe(map(result => result));
  }

  signup(data)
  {
    return this.http.post(this.url+'signup',data)
             .pipe(map(results => results));
  }

  forgot(data)
  {
    return this.http.post(this.url+'forgot',data)
             .pipe(map(results => results));
  }

  forgetPassword(data)
  {
	  var formdata = new FormData();
    return this.http.post(`https://www.abcd.in/admin/appapi/forgetpassword.php?number=${data.number}`, formdata)
    .pipe(map(result => result));
  }

  joiningBonus(user_id){
    return this.http.get(`https://www.abcd.in/admin/appapi/joiningbonus.php?user_id=`+user_id)
    .pipe(map(result => result));
  }

  verify(data)
  {
    return this.http.post(this.url+'verify',data)
             .pipe(map(results => results));
  }

  updatePassword(data)
  {
    return this.http.post(this.url+'updatePassword',data)
             .pipe(map(results => results));
  }

  userInfo(id,sid = 0,cart_no:any = 0)
  {
    return this.http.get(this.url+'userInfo?id='+id+'&store_id='+sid+'&cart_no='+cart_no)
             .pipe(map(results => results));
  }

  saveAddress(data)
  {
    return this.http.post(this.url+'saveAddress',data)
             .pipe(map(results => results));
  }

  cancelOrder(id)
  {
    return this.http.get(this.url+'cancelOrder?id='+id+'&lid='+localStorage.getItem('lid'))
             .pipe(map(results => results));
  }

  rating(data)
  {
    return this.http.post(this.url+'rating',data)
             .pipe(map(results => results));
  }

  updateInfo(data,id)
  {
    return this.http.post(this.url+'updateInfo?id='+id,data)
             .pipe(map(results => results));
  }

  runningOrder()
  {
    return this.http.get(this.url+'runningOrder?id='+localStorage.getItem('user_id'))
             .pipe(map(results => results));
  }

  orderDetail(id)
  {
    return this.http.get(this.url+'orderDetail?lid='+localStorage.getItem('lid')+'&order_id='+id)
             .pipe(map(results => results));
  }

  getSearch(id)
  {
    return this.http.get(this.url+'getSearch?lid='+localStorage.getItem('lid')+'&item_id='+id)
             .pipe(map(results => results));
  }

  verifyUser(id)
  {
    return this.http.get(this.url+'verifyUser?id='+id)
             .pipe(map(results => results));
  }

  delete()
  {
    return this.http.get(this.url+'userInfo?id='+localStorage.getItem('lid')+"&type=delete")
             .pipe(map(results => results));
  }
}