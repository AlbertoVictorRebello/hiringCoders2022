const Client = require('../../models/client')
describe('Clients', ()=>{
    // beforeEach(async ()=>{ ** Use async if you will access the DB in deed;
    beforeEach(()=>{

    })

    it('ClientPropertiesValidation', ()=> {
        let client = Client.first();
        expect(client.id).not.toBeUndefined();
        expect(client.name).not.toBeUndefined();
        expect(client.phone).not.toBeUndefined();
    });

    // it('ReturnAll', async ()=> { ** Use async if you will access the DB in deed;
    it('ReturnAll', ()=> {
        let clients = Client.all();
        expect(clients.length).toEqual(10);
    });

    it('UpperCaseTest', ()=> {
        let client = Client.first();
        client.name = "alberto";
        expect(client.upperCase()).toEqual('ALBERTO');
    });
    
    
})