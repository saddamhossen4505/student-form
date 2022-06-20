/**
 *      SetAlert Function.
 *      ==================
 */
const setAlert = ( messege, type = 'danger' ) => {
    return `<p class="alert alert-${ type } d-flex justify-content-between">${ messege }<button class="btn btn-close" data-bs-dismiss="alert"></button> </p>`
};


 /**
  *     Email-Check Function.
  *     ====================
  */

 const emailCheck = (email) => {

    let pattern = /^[a-z0-9\._]{1,}@[a-z0-9]{1,}\.[a-z]{2,6}$/;
    return pattern.test(email);

 };



 /**
  *     Cell-Check Function.
  *     ====================
  */

  const cellCheck = (cell) => {

    let pattern = /^(01|008801|\+8801)[0-9]{9}$/;
    return pattern.test(cell);
    
 };