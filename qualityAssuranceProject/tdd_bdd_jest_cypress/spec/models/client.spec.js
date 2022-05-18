const cypress = require('cypress');
const Client = require('../../models/client')
describe('Clients', ()=>{
    // beforeEach(async ()=>{ ** Use async if you will access the DB in deed;
    beforeEach(()=>{
        
    })

    test('ClientPropertiesValidation', ()=> {
        let client = Client.first();
        expect(client.id).not.toBeUndefined();
        expect(client.name).not.toBeUndefined();
        expect(client.phone).not.toBeUndefined();
    });

    // it('ReturnAll', async ()=> { ** Use async if you will access the DB in deed;
    test('ReturnAll', ()=> {
        let clients = Client.all();
        expect(clients.length).toEqual(10);
    });

    test('UpperCaseTest', ()=> {
        let client = Client.first();
        client.name = "alberto";
        expect(client.upperCase()).toEqual('ALBERTO');
    });
    
    test('ContainsLetterA', ()=> {
        let client = Client.first();
        client.name = "alberto";
        expect(client.name.indexOf("a") != -1).toEqual(true);
    });
})