import { AzureTools } from "../../../util/azure_tools";
import uuid from "uuid";

export default async (req, res) => {
    const azureTools = new AzureTools('WDD330-Final')
    const { authorization } = req.headers;
    const path = req.query.path ? req.query.path : [];

    let items = []
    switch (req.method) {
        case 'GET':
            switch (path[0]) {
                case 'user':
                    if(path[1]) {
                        items = await azureTools.getByField('blogs', 'user', path[1])
                    } else {
                        res.status(400).json({
                            error: 'This path requires an user Id'
                        })
                        return
                    }
                    break
                case 'id':
                    if(path[1]) {
                        items = await azureTools.getById('blogs', path[1])
                    } else {
                        res.status(400).json({
                            error: 'This path requires an blog Id'
                        })
                        return
                    }
                    break
                case undefined:
                    items = await azureTools.getAll('blogs')
                    break
            }
            res.status(200).json({
                totalItems: items ? items.length : 0,
                items: items ? items : []
            })
            break
        case 'POST':
            if(!req.body) {
                res.status(400).json({
                    error: 'This path requires a body'
                })
                return
            }
            if(!req.body.user) {
                res.status(400).json({
                    error: 'Blog post is missing a user'
                })
                return
            }
            if(!req.body.id) {
                req.body.id = uuid.v4()
            }
            items = await azureTools.create('blogs', req.body)
            res.status(201).json({
                itemCreated: items
            })
            break
        case 'DELETE':
            switch (path[0]) {
                case 'id':
                    if(path[1]) {
                        items = await azureTools.getById('blogs', path[1])
                        if(items.length > 0) {
                            items = await azureTools.deleteById('blogs', path[1])
                            res.status(200).json({
                                itemDeleted: items
                            })
                        } else {
                            res.status(404).json({
                                error: 'Blog not found'
                            })
                        }
                    } else {
                        res.status(400).json({
                            error: 'This path requires an blog Id'
                        })
                        return
                    }
                    break
                case 'user':
                    if(path[1]) {
                        items = await azureTools.getByField('blogs', 'user', path[1])
                        if(items.length > 0) {
                            await azureTools.deleteByUser('blogs', path[1])
                            res.status(200).json({
                                itemsDeleted: items
                            })
                        } else {
                            res.status(404).json({
                                error: 'Blogs not found'
                            })
                        }
                    } else {
                        res.status(400).json({
                            error: 'This path requires an user Id'
                        })
                        return
                    }
                    break
            }
            break
        default:
            res.status(400).json({
                error: 'This path requires a valid method'
            })
            return
    }       
}