import { CosmosClient } from "@azure/cosmos";

export class AzureTools {
    constructor(database) {
        const endpoint = process.env.COSMOS_ENDPOINT;
        const key = process.env.COSMOS_KEY;
        this.client = new CosmosClient({endpoint, key});
        this.database = this.client.database(database);
    }

    async getAll(container) {
        const { resources } = await this.database.container(container).items.readAll().fetchAll();
        return resources;
    }

    async getById(container, id) {
        const { resources } = await this.database.container(container).items.query(`SELECT * FROM c WHERE c.id = '${id}'`).fetchAll();
        return resources;
    }

    async getByField(container, field, value) {
        const { resources } = await this.database.container(container).items.query(`SELECT * FROM c WHERE c.${field} = '${value}'`).fetchAll();
        return resources;
    }

    async create(container, item) {
        const { resource } = await this.database.container(container).items.upsert(item);
        return resource;
    }

    async deleteById(container, id) {
        const { resource } = await this.database.container(container).item(id).delete();
        return resource;
    }

    async deleteByUser(container, user) {
        const { resources } = await this.database.container(container).items.query(`SELECT * FROM c WHERE c.user = '${user}'`).fetchAll();
        for(let i = 0; i < resources.length; i++) {
            await this.deleteById(container, resources[i].id);
        }
    }
}