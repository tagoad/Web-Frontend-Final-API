import { AzureTools } from "../../../util/azure_tools"
import crypto from 'crypto'
import jwt from 'jsonwebtoken'

export default async (req, res) => {
    const { fname, lname, dname, email, password } = JSON.parse(req.body)
    const azureTools = new AzureTools('WDD330-Final')
    const path = req.query.path ? req.query.path : [];

    if(!email || !password) {
        res.status(400).json({
            error: 'This path requires an email and password'
        })
        return
    }
    let user = await (await azureTools.getById('users', email)).pop()

    switch (req.method) {
        case 'POST':
            switch(path[0]) {
                case 'register':
                    if(user) {
                        res.status(400).json({
                            error: 'User already exists',
                            user: user
                        })
                        return
                    }
                    if(!fname || !lname || !dname) {
                        res.status(400).json({
                            error: 'This path requires a first, last, and display name',
                            fname: fname,
                            lname: lname,
                            dname: dname
                        })
                        return
                    }
                    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false) {
                        res.status(400).json({
                            error: 'Email is invalid',
                            email: email
                        })
                        return
                    }
                    

                    const salt = crypto.randomBytes(16).toString('hex')

                    let newUser = {
                        id: email,
                        fName: fname,
                        lName: lname,
                        dName: dname,
                        salt: salt,
                        hash: crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex')
                    }
                    user = await azureTools.create('users', newUser)
                    res.status(201).json({
                        itemCreated: user
                    })
                    break
                case 'login':
                    if(!user) {
                        res.status(400).json({
                            error: 'User not found',
                            email: email
                        })
                        return
                    }
                    let hash = crypto.pbkdf2Sync(password, user.salt, 1000, 64, 'sha512').toString('hex')
                    if(hash !== user.hash) {
                        res.status(401).json({
                            error: 'Incorrect email/password combo'
                        })
                        return
                    }
                    const token = jwt.sign({
                        exp: Math.floor(Date.now() / 1000) + (60 * 60),
                        data: {
                            email: user.id,
                            fname: user.fName,
                            lname: user.lName
                        }
                    }, process.env.JWT_SECRET)
                    res.status(200).json({
                        token: token,
                        user: user.id,
                        dname: user.dName
                    })
                    break
                default:
                    res.status(400).json({
                        error: 'Users only support /login and /register'
                    })
                    return
            }
            default:
                res.status(404).json({
                    error: 'User only support Post method'
                })
                return
    }
}