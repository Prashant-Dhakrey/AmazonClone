const express = require("express");
const router = new express.Router();
const Products = require("../models/productsSchema");
const USER = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");

// get productdata api

router.get("/getproducts", async (req, res) => {

    try {

        const productsdata = await Products.find();
        // console.log("console the data " + productsdata);
        res.status(201).json(productsdata);

    }
    catch (error) {
        console.log("error" + error.message);

    }

});


// get individual data   to chekc agine ki data nhi a rha hai postman ke throw 

router.get("/getproductsone/:id", async (req, res) => {

    try {

        const { id } = req.params;
        // console.log(id); 

        const individualdata = await Products.findOne({ id: id });
        // console.log(individualdata +"individual data ");
        res.status(201).json(individualdata);

    }
    catch (error) {


        res.status(400).json(individualdata);
        console.log("error" + error.message);
    }
});

//    register data   

router.post("/register", async (req, res) => {
    console.log(req.body);

    const { fname, email, mobile, password, cpassword } = req.body;

    if (!fname || !email || !mobile || !password || !cpassword) {

        res.status(422).json({ error: "fill the all data " });
        console.log("no data aviable");
    };

    try {

        const preuser = await USER.findOne({ email: email });

        if (preuser) {
            res.status(409).json({ error: "this user already present " })
        }
        else if (password !== cpassword) {

            res.status(422).json({ error: " password and  confirm password does not match " })
        }
        else {

            const finalUser = new USER({

                fname, email, mobile, password, cpassword

            });

            //  use bcrypt js
            //  password hashing process  

            const storedata = await finalUser.save();
            console.log(storedata);

            res.status(201).json(storedata);
        }

    } catch (error) {

    }

})

//  login user api 

router.post("/login", async (req, res) => {

    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({ error: "Fill the All Data " })
    };

    try {

        const userlogin = await USER.findOne({ email: email })
        console.log(userlogin + "user  value ");

        if (userlogin) {

            const isMatch = await bcrypt.compare(password, userlogin.password);
            console.log(isMatch);

            // token generate 

            const token = await userlogin.generateAuthtoken();
            console.log(token);


            //generate cookie 

            res.cookie("Amazonweb", token, {
                expires: new Date(Date.now() + 900000),
                httpOnly: true

            })

            if (!isMatch) {
                res.status(400).json({ error: " Password Not Macth " });
            }
            else {
                res.status(201).json(userlogin);
            }
        } else {
            res.status(400).json({ error: " Invalid Details  " });

        }

    } catch (error) {

        res.status(400).json({ error: " invalid Details  " });
    }

})


// adding the data onto cart 

router.post("/addcart/cart:id", authenticate, async (req, res) => {
    try {

        const { id } = req.params;

        const cart = await Products.findOne({ id: id });
        console.log(cart + "cart value");

        const UserContact = await USER.findOne({ _id: req.userID });
        console.log(UserContact);

        if (UserContact) {

            const cartData = await UserContact.addcartData(cart);
            await UserContact.save();
            console.log(cartData);
            res.status(201).json(UserContact);

        } else {

            res.status(401).json({ error: "Invalid User " });

        }

    } catch (error) {
        res.status(401).json({ error: "Invalid User " });

    }
});

// get cart details

router.get("/cartdetails", authenticate, async (req, res) => {

    try {

        const buyuser = await USER.find({ _id: req.userID });
        res.status(201).json(buyuser);


    } catch (error) {
        console.log("error", error);
    }

})

router.get("/validuser", authenticate, async (req, res) => {

    try {

        const validuserone = await USER.find({ _id: req.userID });
        res.status(201).json(validuserone);


    } catch (error) {
        console.log("error", error);
    }

})

// remove Item from cart \

router.delete("/remove/:id", authenticate, async (req, res) => {

    try {

        const { id } = req.params;

        req.rootUser.cart = req.rootUser.carts.filter((cruval) => {
            return cruval.id != id;
        });

        res.rootUser.save();
        res.status(201).json(req.rootUser);
        console.log("item remove ");

    }
    catch (error) {

        console.log(error + "error");
        res.status(400).json(req.rootUser);


    }
})


module.exports = router;
