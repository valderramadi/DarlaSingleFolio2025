const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server'); 
const expect = chai.expect;

chai.use(chaiHttp);

describe('Dataset Saving Endpoint', function() {
  it('should save dataset to MongoDB and as a file', function(done) {
    // Mock data that resembles what your endpoint expects
    const mockData = {
      data: JSON.stringify([{ name: "Sample", value: "123" }]) // Adjust based on your actual data structure
    };

    chai.request(server)
      .post('/saveDataset')
      .send(mockData)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body.message).to.equal("Dataset saved successfully!");
        
        done(); // Complete the test
      });
  });
});
