import { AzureTools } from "../../../util/azure_tools"
import crypto from 'crypto'
import jwt from 'jsonwebtoken'

export default async (req, res) => {
    const { fname, lname, email, password } = req.body
    const azureTools = new AzureTools('WDD330-Final')

    if(!email || !password) {
        res.status(400).json({
            error: 'This path requires an email and password'
        })
        return
    }
    let user = await (await azureTools.getById('users', email)).pop()

    switch (req.method) {
        case 'GET':
            if(!user) {
                res.status(400).json({
                    error: 'User not found'
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
                token: token
            })
            break
        case 'POST':
            if(user) {
                res.status(400).json({
                    error: 'User already exists'
                })
                return
            }
            if(!fname || !lname ) {
                res.status(400).json({
                    error: 'This path requires a first and last name'
                })
                return
            }
            if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) == false) {
                res.status(400).json({
                    error: 'Email is invalid'
                })
                return
            }
            newUser = {
                id: email,
                fName: fname,
                lName: lname,
                salt: crypto.randomBytes(16).toString('hex'),
                hash: crypto.pbkdf2Sync(password, user.salt, 1000, 64, 'sha512').toString('hex')
            }
            user = await azureTools.create('users', newUser)
            res.status(201).json({
                itemCreated: user
            })
            break
    }
}