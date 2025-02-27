require('dotenv').config();
let x = require('express');
let app = x();
let bodyParser = require('body-parser');
let path = require('path');
let fileUpload = require("express-fileupload");
let axios = require('axios');
let cors = require('cors');
const juice = require("juice");
//testing as repo name changed
app.use(
    cors({
        origin: '*',
    })
);
app.use(x.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
var admin = require("firebase-admin");

var serviceAccount = {
    "type": "service_account",
    "project_id": "createweb-bd362",
    "private_key_id": "2303412db1b33d4e34e969634bfc9963cc5ca55b",
    "private_key": process.env.FIREBASE_SERVICE_ACCOUNT,
    "client_email": "firebase-adminsdk-fbsvc@createweb-bd362.iam.gserviceaccount.com",
    "client_id": "101321310547065060941",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40createweb-bd362.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
  }
  
  

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


let db = admin.firestore();

//let VERCEL_API = "https://api.vercel.com/v13/deployments";
//let VERCEL_API_KEY = "y6EIOyPP08W456ILGeB7FSbX";

app.post('/parse_files',async function(req,res){
    try {

        
        let csscontent = req.files.css_file.data.toString("utf-8");
        let htmlcontent = req.files.html_file.data.toString("utf-8");

        let xsw = req.body.bootstrap_css;
        let ksw = req.body.bootstrap_js;
        let abdf = req.body.component;

        console.log(xsw);
        console.log(ksw);
        console.log(abdf);

        if(abdf == "Buttons"){

            const docRef = await db.collection("button_components").add({
                html_code:htmlcontent,
                css_code:csscontent,
                bootstrap_css_used:xsw,
                bootstrap_js_used:ksw
              });
          
              console.log("Document added with ID:", docRef.id);

        }
        if(abdf == "Carousel"){

            const docRef = await db.collection("carousel_components").add({
                html_code:htmlcontent,
                css_code:csscontent,
                bootstrap_css_used:xsw,
                bootstrap_js_used:ksw
              });
          
              console.log("Document added with ID:", docRef.id);

        }

        if(abdf == "Navbar"){

            const docRef = await db.collection("navbar_components").add({
                html_code:htmlcontent,
                css_code:csscontent,
                bootstrap_css_used:xsw,
                bootstrap_js_used:ksw
              });
          
              console.log("Document added with ID:", docRef.id);

        }

        if(abdf == "Accordion"){
            const docRef = await db.collection("accordion_components").add({
                html_code:htmlcontent,
                css_code:csscontent,
                bootstrap_css_used:xsw,
                bootstrap_js_used:ksw
              });
          
              console.log("Document added with ID:", docRef.id);

        }

        if(abdf == "Alerts"){
            const docRef = await db.collection("alert_components").add({
                html_code:htmlcontent,
                css_code:csscontent,
                bootstrap_css_used:xsw,
                bootstrap_js_used:ksw
              });
          
              console.log("Document added with ID:", docRef.id);

        }

        if(abdf == "Button Group"){
            const docRef = await db.collection("button_group_components").add({
                html_code:htmlcontent,
                css_code:csscontent,
                bootstrap_css_used:xsw,
                bootstrap_js_used:ksw
              });
          
              console.log("Document added with ID:", docRef.id);
        }

        if(abdf == "Card"){

            const docRef = await db.collection("card_components").add({
                html_code:htmlcontent,
                css_code:csscontent,
                bootstrap_css_used:xsw,
                bootstrap_js_used:ksw
              });
          
              console.log("Document added with ID:", docRef.id);

        }

        if(abdf == "Dropdowns"){

            const docRef = await db.collection("dropdown_components").add({
                html_code:htmlcontent,
                css_code:csscontent,
                bootstrap_css_used:xsw,
                bootstrap_js_used:ksw
              });
          
              console.log("Document added with ID:", docRef.id);

        }

        

    

        if(abdf == "Badge"){

            const docRef = await db.collection("badge_components").add({
                html_code:htmlcontent,
                css_code:csscontent,
                bootstrap_css_used:xsw,
                bootstrap_js_used:ksw
              });
          
              console.log("Document added with ID:", docRef.id);


        }

        if(abdf=="List Group"){

            const docRef = await db.collection("list_group_components").add({
                html_code:htmlcontent,
                css_code:csscontent,
                bootstrap_css_used:xsw,
                bootstrap_js_used:ksw
              });
          
              console.log("Document added with ID:", docRef.id);

        }

        if(abdf=="Collapse"){

            const docRef = await db.collection("collapse_components").add({
                html_code:htmlcontent,
                css_code:csscontent,
                bootstrap_css_used:xsw,
                bootstrap_js_used:ksw
              });
          
              console.log("Document added with ID:", docRef.id);

        }



        



        
       
        //css content
        /*if (htmlcontent.includes("<style>") && htmlcontent.includes("</style>")) {
            htmlcontent = htmlcontent.replace("<style>", `<style>\n${csscontent}\n`);

            
        } else {
            let cssFileName = req.body.css_file_name; // Get the CSS file name from request
            let linkRegex = new RegExp(`<link\\s+rel=["']stylesheet["']\\s+href=["'][^"']*${cssFileName}[^"']*["']\\s*\\/?>`, "i");

            if (linkRegex.test(htmlcontent)) {
    // Replace only the matching <link> tag with inline CSS
                htmlcontent = htmlcontent.replace(linkRegex, `<style>\n${csscontent}\n</style>`);
            } else {
    // If the <link> tag with the specific CSS file is not found, append <style> at the beginning of <head>
                htmlcontent = htmlcontent.replace("<head>", `<head>\n<style>\n${csscontent}\n</style>`);
            }
        }*/


        //if (htmlcontent.includes("<script>") && htmlcontent.includes("</script>")) {
            // Insert JS content before the first <script> tag
            // Extract all JavaScript inside <script> tags
            /*let scriptMatches = htmlcontent.match(/<script[^>]*>([\s\S]*?)<\/script>/g);

            let combinedJS = "";

// If script tags exist, merge their content
            if (scriptMatches) {
                scriptMatches.forEach(scriptTag => {
                let scriptContent = scriptTag.match(/<script[^>]*>([\s\S]*?)<\/script>/);
                    if (scriptContent && scriptContent[1]) {
                        combinedJS += scriptContent[1] + "\n"; // Merge JS content
                    }
                });

    // Remove all existing <script> tags from the HTML
            htmlcontent = htmlcontent.replace(/<script[^>]*>[\s\S]*?<\/script>/g, "");
            }

// Append the new combined <script> tag at the end of <body>
            htmlcontent = htmlcontent.replace("</body>", `<script>\n${combinedJS}\n${jscontent}\n</script>\n</body>`);*/

        
            // If no <script> tag exists, add JS at the end of <body>
            //at th end
            /*let jsFileName = req.body.js_file_name; // Get JS file name from request
            let scriptRegex = new RegExp(`<script\\s+[^>]*src=["'][^"']*${jsFileName}[^"']*["'][^>]*>\\s*</script>`, "gi");

            if(scriptRegex.test(htmlcontent)){
                // Remove the specific <script> tag if found
                    htmlcontent = htmlcontent.replace(scriptRegex, "");

            // Append the inline <script> at the end of <body>
                    htmlcontent = htmlcontent.replace("</body>", `<script>\n${jscontent}\n</script>\n</body>`);

            }
            else{
                htmlcontent = htmlcontent.replace("</html>", `<script>\n${jscontent}\n</script>\n</html>`);

            }*/



        

                


        



        

        
        
    } catch (error) {
        console.error("Error saving GitHub URL:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }

    



});


/*app.post('/fetch_all',async function(req,res){

    try {
        const collectionRef = db.collection("react_components"); // Replace with your collection name
        const snapshot = await collectionRef.get();

        if (snapshot.empty) {
            return res.status(404).json({ message: "No documents found!" });
        }

        let data = [];
        snapshot.forEach(doc => {
            data.push({ id: doc.id, ...doc.data() }); // Include document ID in response
        });

        

        for(let rcv=0;rcv<data.length;rcv++){
            let ytr = data[rcv];
            console.log(ytr);

            let pplt = ytr.id;

            ytr.html_code = "<div>" + ytr.html_code + "</div>";

            





        }

        
        console.log(data);
        res.json({data:data});
    } catch (error) {
        console.error("Error fetching documents:", error);
        res.status(500).json({ error: "Failed to fetch data" });
    }



});*/

app.post('/fetch_all_buttons',async function(req,res){

    try {
        const collectionRef = db.collection("button_components"); // Replace with your collection name
        const snapshot = await collectionRef.get();

        if (snapshot.empty) {
            return res.status(404).json({ message: "No documents found!" });
        }

        let data = [];
        snapshot.forEach(doc => {
            data.push({ id: doc.id, ...doc.data() }); // Include document ID in response
        });

        

        for(let rcv=0;rcv<data.length;rcv++){
            let ytr = data[rcv];
            console.log(ytr);

            let pplt = ytr.id;

            ytr.html_code = "<div>" + ytr.html_code + "</div>";

            





        }

        
        console.log(data);
        res.json({data:data});
    } catch (error) {
        console.error("Error fetching documents:", error);
        res.status(500).json({ error: "Failed to fetch data" });
    }



});

app.post('/fetch_all_accordian',async function(req,res){

    try {
        const collectionRef = db.collection("accordion_components"); // Replace with your collection name
        const snapshot = await collectionRef.get();

        if (snapshot.empty) {
            return res.status(404).json({ message: "No documents found!" });
        }

        let data = [];
        snapshot.forEach(doc => {
            data.push({ id: doc.id, ...doc.data() }); // Include document ID in response
        });

        

        for(let rcv=0;rcv<data.length;rcv++){
            let ytr = data[rcv];
            console.log(ytr);

            let pplt = ytr.id;

            ytr.html_code = "<div>" + ytr.html_code + "</div>";

            





        }

        
        console.log(data);
        res.json({data:data});
    } catch (error) {
        console.error("Error fetching documents:", error);
        res.status(500).json({ error: "Failed to fetch data" });
    }



});

app.post('/fetch_all_alert',async function(req,res){

    try {
        const collectionRef = db.collection("alert_components"); // Replace with your collection name
        const snapshot = await collectionRef.get();

        if (snapshot.empty) {
            return res.status(404).json({ message: "No documents found!" });
        }

        let data = [];
        snapshot.forEach(doc => {
            data.push({ id: doc.id, ...doc.data() }); // Include document ID in response
        });

        

        for(let rcv=0;rcv<data.length;rcv++){
            let ytr = data[rcv];
            console.log(ytr);

            let pplt = ytr.id;

            ytr.html_code = "<div>" + ytr.html_code + "</div>";

            





        }

        
        console.log(data);
        res.json({data:data});
    } catch (error) {
        console.error("Error fetching documents:", error);
        res.status(500).json({ error: "Failed to fetch data" });
    }



});

app.post('/fetch_all_badge',async function(req,res){

    try {
        const collectionRef = db.collection("badge_components"); // Replace with your collection name
        const snapshot = await collectionRef.get();

        if (snapshot.empty) {
            return res.status(404).json({ message: "No documents found!" });
        }

        let data = [];
        snapshot.forEach(doc => {
            data.push({ id: doc.id, ...doc.data() }); // Include document ID in response
        });

        

        for(let rcv=0;rcv<data.length;rcv++){
            let ytr = data[rcv];
            console.log(ytr);

            let pplt = ytr.id;

            ytr.html_code = "<div>" + ytr.html_code + "</div>";

            





        }

        
        console.log(data);
        res.json({data:data});
    } catch (error) {
        console.error("Error fetching documents:", error);
        res.status(500).json({ error: "Failed to fetch data" });
    }



});

app.post('/fetch_all_button_group',async function(req,res){

    try {
        const collectionRef = db.collection("button_group_components"); // Replace with your collection name
        const snapshot = await collectionRef.get();

        if (snapshot.empty) {
            return res.status(404).json({ message: "No documents found!" });
        }

        let data = [];
        snapshot.forEach(doc => {
            data.push({ id: doc.id, ...doc.data() }); // Include document ID in response
        });

        

        for(let rcv=0;rcv<data.length;rcv++){
            let ytr = data[rcv];
            console.log(ytr);

            let pplt = ytr.id;

            ytr.html_code = "<div>" + ytr.html_code + "</div>";

            





        }

        
        console.log(data);
        res.json({data:data});
    } catch (error) {
        console.error("Error fetching documents:", error);
        res.status(500).json({ error: "Failed to fetch data" });
    }



});

app.post('/fetch_all_card',async function(req,res){

    try {
        const collectionRef = db.collection("card_components"); // Replace with your collection name
        const snapshot = await collectionRef.get();

        if (snapshot.empty) {
            return res.status(404).json({ message: "No documents found!" });
        }

        let data = [];
        snapshot.forEach(doc => {
            data.push({ id: doc.id, ...doc.data() }); // Include document ID in response
        });

        

        for(let rcv=0;rcv<data.length;rcv++){
            let ytr = data[rcv];
            console.log(ytr);

            let pplt = ytr.id;

            ytr.html_code = "<div>" + ytr.html_code + "</div>";

            





        }

        
        console.log(data);
        res.json({data:data});
    } catch (error) {
        console.error("Error fetching documents:", error);
        res.status(500).json({ error: "Failed to fetch data" });
    }



});

app.post('/fetch_all_carousel',async function(req,res){

    try {
        const collectionRef = db.collection("carousel_components"); // Replace with your collection name
        const snapshot = await collectionRef.get();

        if (snapshot.empty) {
            return res.status(404).json({ message: "No documents found!" });
        }

        let data = [];
        snapshot.forEach(doc => {
            data.push({ id: doc.id, ...doc.data() }); // Include document ID in response
        });

        

        for(let rcv=0;rcv<data.length;rcv++){
            let ytr = data[rcv];
            console.log(ytr);

            let pplt = ytr.id;

            ytr.html_code = "<div>" + ytr.html_code + "</div>";

            





        }

        
        console.log(data);
        res.json({data:data});
    } catch (error) {
        console.error("Error fetching documents:", error);
        res.status(500).json({ error: "Failed to fetch data" });
    }



});


app.post('/fetch_all_collapse',async function(req,res){

    try {
        const collectionRef = db.collection("collapse_components"); // Replace with your collection name
        const snapshot = await collectionRef.get();

        if (snapshot.empty) {
            return res.status(404).json({ message: "No documents found!" });
        }

        let data = [];
        snapshot.forEach(doc => {
            data.push({ id: doc.id, ...doc.data() }); // Include document ID in response
        });

        

        for(let rcv=0;rcv<data.length;rcv++){
            let ytr = data[rcv];
            console.log(ytr);

            let pplt = ytr.id;

            ytr.html_code = "<div>" + ytr.html_code + "</div>";

            





        }

        
        console.log(data);
        res.json({data:data});
    } catch (error) {
        console.error("Error fetching documents:", error);
        res.status(500).json({ error: "Failed to fetch data" });
    }



});

app.post('/fetch_all_dropdown',async function(req,res){

    try {
        const collectionRef = db.collection("dropdown_components"); // Replace with your collection name
        const snapshot = await collectionRef.get();

        if (snapshot.empty) {
            return res.status(404).json({ message: "No documents found!" });
        }

        let data = [];
        snapshot.forEach(doc => {
            data.push({ id: doc.id, ...doc.data() }); // Include document ID in response
        });

        

        for(let rcv=0;rcv<data.length;rcv++){
            let ytr = data[rcv];
            console.log(ytr);

            let pplt = ytr.id;

            ytr.html_code = "<div>" + ytr.html_code + "</div>";

            





        }

        
        console.log(data);
        res.json({data:data});
    } catch (error) {
        console.error("Error fetching documents:", error);
        res.status(500).json({ error: "Failed to fetch data" });
    }



});

app.post('/fetch_all_list_grp',async function(req,res){

    try {
        const collectionRef = db.collection("list_group_components"); // Replace with your collection name
        const snapshot = await collectionRef.get();

        if (snapshot.empty) {
            return res.status(404).json({ message: "No documents found!" });
        }

        let data = [];
        snapshot.forEach(doc => {
            data.push({ id: doc.id, ...doc.data() }); // Include document ID in response
        });

        

        for(let rcv=0;rcv<data.length;rcv++){
            let ytr = data[rcv];
            console.log(ytr);

            let pplt = ytr.id;

            ytr.html_code = "<div>" + ytr.html_code + "</div>";

            





        }

        
        console.log(data);
        res.json({data:data});
    } catch (error) {
        console.error("Error fetching documents:", error);
        res.status(500).json({ error: "Failed to fetch data" });
    }



});


app.post('/fetch_all_navbar',async function(req,res){

    try {
        const collectionRef = db.collection("navbar_components"); // Replace with your collection name
        const snapshot = await collectionRef.get();

        if (snapshot.empty) {
            return res.status(404).json({ message: "No documents found!" });
        }

        let data = [];
        snapshot.forEach(doc => {
            data.push({ id: doc.id, ...doc.data() }); // Include document ID in response
        });

        

        for(let rcv=0;rcv<data.length;rcv++){
            let ytr = data[rcv];
            console.log(ytr);

            let pplt = ytr.id;

            ytr.html_code = "<div>" + ytr.html_code + "</div>";

            





        }

        
        console.log(data);
        res.json({data:data});
    } catch (error) {
        console.error("Error fetching documents:", error);
        res.status(500).json({ error: "Failed to fetch data" });
    }



});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});