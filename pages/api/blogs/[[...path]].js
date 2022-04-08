import { AzureTools } from "../../../util/azure_tools";
import { v4 } from "uuid";

export default async (req, res) => {
    const azureTools = new AzureTools('WDD330-Final')
    const { authorization } = req.headers;
    const path = req.query.path ? req.query.path : [];

    let items = []
    switch (req.method) {
        case 'GET':
            switch (path[0]) {
                case 'featured':
                    items = await azureTools.getByField('blogs', 'featured', "true");
                    break;
                case 'user':
                    if(path[1]) {
                        items = await azureTools.getByField('blogs', 'user', path[1])
                    } else {
                        return res.status(400).json({
                            error: 'This path requires an user Id'
                        })
                    }
                    break
                case 'id':
                    if(path[1]) {
                        console.log(path[1])
                        items = await azureTools.getById('blogs', path[1])
                    } else {
                        return res.status(400).json({
                            error: 'This path requires an blog Id'
                        })
                    }
                    break
                case undefined:
                    items = await azureTools.getAll('blogs')
                    break
            }
            return res.status(200).json({
                totalItems: items ? items.length : 0,
                items: items ? items : []
            })
        case 'POST':
            if(!req.body) {
                return res.status(400).json({
                    error: 'This path requires a body'
                })
            }
            const parsedBody = JSON.parse(req.body)
            if(!parsedBody.user) {
                return res.status(400).json({
                    error: 'Blog post is missing a user'
                })
            }
            if(!parsedBody.id) {
                parsedBody.id = v4()
            }
            items = await azureTools.create('blogs', parsedBody)
            return res.status(201).json({
                itemCreated: items
            })
        case 'DELETE':
            switch (path[0]) {
                case 'id':
                    if(path[1]) {
                        console.log(path[1])
                        items = await azureTools.getById('blogs', path[1])
                        if(items.length > 0) {
                            items = await azureTools.deleteById('blogs', path[1])
                             return res.status(200).json({
                                itemDeleted: items
                            })
                        } else {
                            return res.status(404).json({
                                error: 'Blog not found'
                            })
                        }
                    } else {
                        return res.status(400).json({
                            error: 'This path requires an blog Id'
                        })
                    }
                case 'user':
                    if(path[1]) {
                        items = await azureTools.getByField('blogs', 'user', path[1])
                        if(items.length > 0) {
                            await azureTools.deleteByUser('blogs', path[1])
                            return res.status(200).json({
                                itemsDeleted: items
                            })
                        } else {
                            return res.status(404).json({
                                error: 'Blogs not found'
                            })
                        }
                    } else {
                        return res.status(400).json({
                            error: 'This path requires an user Id'
                        })
                    }
            }
            break
        case 'OPTIONS':
            return res.status(200).json({
                message: 'Options request received'
            })
        default:
            return res.status(400).json({
                error: 'This path requires a valid method'
            })
    }       
}