import * as balanceResource from './balance';

describe('/balance resource', () => {

    it('GET method fetches the balance value', (done) => {
        balanceResource.get({
            next: balance => {
                console.log('Balance Get Response ', balance);
                expect(balance).toHaveProperty('value');
                expect(typeof(balance.value)).toEqual('number');
            },
            error: err => {
                console.error(err);
                done();
            },
            complete: () => {
                console.log('Balance Get Complete.');
                done();
            },
        });
    });

    it('PUT method updates the balance value', (done) => {
        balanceResource.put(
            {
                resource: {value: 1200}
            },
            {
                /**
                 * @param {Object} ajaxResponse
                 *  .status {Number}
                 *  .response {Object}
                 *      Sample
                 *          { value: 1200 }
                 */
                next: ajaxResponse => {
                    console.log('Balance Put Response ', ajaxResponse.response);
                    expect(ajaxResponse.status).toEqual(200);
                },
                error: err => {
                    console.error(err);
                    done();
                },
                complete: () => {
                    console.log('Balance Put Complete.');
                    done();
                },
            }
        );
    });

});