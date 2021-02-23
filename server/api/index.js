const router = require('express').Router();

//you might further delegate each router into its own namespace like so:
// matches all requests to /api/users/
router.use('/users', require('./users')); 

//handle 404
/*If someone makes a request that starts with `/api`, but you DON'T have a corresponding router, this piece of
middleware will generate a 404, and send it to your error-handling endware!
 */
router.use(function (req, res, next) {
    const err = new Error('API route not found!');
    err.status = 404;
    next(err);
  });
  

module.exports = router;