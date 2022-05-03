import React from 'react';
import Fade from 'react-reveal/Fade';


export default function Returns() {
  return (
    <div className='returns-container'>
      <Fade bottom>
        <h1>RETURNS</h1>

        <h5 className='size-info'>IF YOU WOULD LIKE TO RETURN AN ITEM, PLEASE MAKE SURE TO:</h5>
<p className='size-info'>In general:</p>
<ul className='size-info'>
    <li>return your item in the original packaging</li>
    <li>submit your return within 30 days after receiving your package</li>
    <li>only return the wrong/faulty item, if our customer care team asks you to</li>
    <li>treat the shoes with care when trying it on</li>
    <li>wear socks when trying them on</li>
    <li>not remove any labels or tags</li>
</ul>

<h6>DIRTY/WORN CLOTHING OR PIECES MISSING TAGS/LABELS WILL NOT BE REFUNDED!</h6><br />

<h6>HOW DO I RETURN AN ITEM?</h6>
<p className='size-info'>Having to return something can be annoying – we know. We have therefore tried to make this process as easy as possible for you.
Simply type your order number and email address in the <a className="returns-link" href="#returns-form">form below</a> and get your prepaid shipping label.</p>

<h6>Refund:</h6>
<p className='size-info'>Once your return is delivered to our warehouse, please allow 5-7 business days for it to be processed and a further 4-6 business days for your refund to show on your bank account.
For more info, read our returns policy.</p>

<h6>Return fees:</h6>
<p className='size-info'>All UK orders can be returned for free within 30 days.
Free returns do not apply to orders shipping from Ireland. The return fees are being deducted from the refund.

The return fee for United Kingdom is free.</p><br />

<h5>GET YOUR SHIPPING LABEL:</h5>
<form id="returns-form">
  <div class="form-group">
    <label for="exampleInputEmail1">Order number</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your order number - GS plus the 6 digit number on your confirmation email" />
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Email address</label>
    <input type="email" class="form-control" id="exampleInputPassword1" placeholder="Enter your email address" />
  </div>
  <button type="submit" class="btn btn-secondary  ">Submit</button>
</form>
</Fade>
    </div>
  )
}
