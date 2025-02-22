let x = require('express');
let app = x();
let bodyParser = require('body-parser');
let path = require('path');
const axios = require('axios');
let cors = require('cors');

app.use(
    cors({
        origin: '*',
    })
);
app.use(x.json());
app.use(bodyParser.urlencoded({ extended: true }));

var admin = require("firebase-admin");

var serviceAccount = {
    "type": "service_account",
    "project_id": "createweb-bd362",
    "private_key_id": "311dc06d2de2125dbfc5bfc9c9577324fdd23d1c",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDajNgSYgm4C5km\nr723ORrw7fdGSEThbHnVJ3wnTyQ/9g23PvYrRD65ekXXLWTZHQutdy/BnVzAZAfd\nKIkpaivRrdt8wTOk2H8+HXlk9RpDrTqooWl6awo9JFxL0Mmwk6JAeLVepxWiuchr\nvT4zLN5gWBz66qyLayd/SIli1ijJgWs6kl+YdnFptSwwMITcdTNLGM+RZqYPRlRb\ndOMGEFTscAsaxgqxfgSRRcipTbNRIGNnHrglP2N7hHPP9WmIGfWvLH6/CTGlZAYW\nrCozlntOWj3Jygf3gQ116sOKmSQmYM98xyIDlkQ+GuC1QC2TrsXb2LGPasSBeAMG\nzUFyA1thAgMBAAECggEAALM5LThmDXJQkJeZJwtKWT2a6F1KhrIWMxMJ/lZ+IEwT\ni8vqZhW1MXsJOpzrLPifSSRHyXINijJ71bcXtuOvnZ+l44i7J47XvAFESnjwR0mY\nlbIULFunzA2387h4z+1uJHCajKHCg4uery0rVAbDlNmNaLacHEN47DsFUSUsWuZj\nJt8B3IF6yd+oiZlO0z/JmZrxIUAO3Zui43sOLiO4xBNmJTMrOVN7McxHVTTEV/QD\n+gq6AS5GYLvOWEijx9QaFLTzn78QEru8WHFp48wYWAN+QD5kcHfMemjT8IGGdM+a\nCvsQbGYJA8o9F5lYPiDJnSVDR+vgmkmktou/1DZDAQKBgQD6yVR4JAGxAky+qWkr\nLFfLI++iUom76y+NpH9AjcUzFbwIdwk3al7h49zfKO1pogP/8lPv59xfqudyd5ay\nxlEWd4wUuGFbJXsCF8jaDccTT6qu6OEuYzWeUnhG7xcgwKeas+VSNABZRH9vSuCb\n1v6VdJePOXeMZ4LfMgpLZVQh4QKBgQDfF/RhOkVK/GSmOGQ2ovHrrN0iV2ctKJVL\nVdslFxa8kdWAzeGnKBTSUChaPUNXqtzCgA1pd6diAQNXDT4XqZ2xfncVkatVy6uk\n5G5NEhbf5eL79KBgaxPwwHRFerP6mp7wPqc+mBOfbqqZxyAf1OMb+8q2WIAvIroS\n6Nn6SdlpgQKBgQDxjIc6bFvgtPlcTuoH9l7dP1CpRNx6zmzv/Xe/oo1ExfNlJ9oN\nsPuQkRuFKfN54d3+YNZt5SICVyczvnG84XzqqdyXfHvxAWm4O1ZuiASt2fbpH078\nkfvr8Tz9/X2GQ2lrfUgsY//N+0bO2Az8rRhqtXDhN5Wo+243MghuVDuzoQKBgQC5\n8rx1wdz5yG+YAE6/H4fnOTlEI3fTMw1lMpWrT5ha6m77oh8gdY8NUVShCokz7C1/\nTL5hFyOD03ZWO6pyjKTsyY02hCk8JLvXf7LUOGyqiHFuMpLuarG/LJp9Qu36xqAN\nfRtnV9ibPeGitU94WLhHndJztEZ7g0V293CgZqd5gQKBgDdZnbwcWQ+PIhuU/r8W\nlGpnbzwgbRPfM0LTP4EAoX/Zf4mNnbYtbpyivObLvwkoMv7wcHimgkdC17iuV6G+\ndvUagSey6hWYOBZ+9jwgdqYaOfTnHMiyLzLs5bDAVNdYzwN8bxQ5n7gErntHvG/q\nOY+o68GLr9qqo7gf9p0szr0k\n-----END PRIVATE KEY-----\n",
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


const db = admin.firestore();

const VERCEL_API = "https://api.vercel.com/v13/deployments";
const VERCEL_API_KEY = "y6EIOyPP08W456ILGeB7FSbX";

app.post('/add_git_hub_url',async function(req,res){
    try {
        let b = req.body.url;
        const response = await axios.post(VERCEL_API, {
            name: "user-react-project",
            gitSource: {
                type: "github",
                repo: b.replace("https://github.com/", "").replace(".git", ""),

            },
        }, {
            headers: {
                Authorization: `Bearer ${VERCEL_API_KEY}`,
                "Content-Type": "application/json",
            },
        });

        const deploymentUrl = response.data.url;
        await db.collection('react_components').add({ url:deploymentUrl });
        res.status(200).json({ message: "GitHub URL added successfully", id: docRef.id });
    } catch (error) {
        console.error("Error saving GitHub URL:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }

    



});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});