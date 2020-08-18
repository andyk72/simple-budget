import * as incomesResource from './incomes';

describe('/incomes resource', () => {

    it('GET method fetches the incomes list in the correct format', (done) => {
        incomesResource.get({
            next: incomes => {
                console.log('Incomes Get Response ', incomes);
                const income = incomes[0];
                expect(incomes.length).toBeDefined();
                expect(income).toHaveProperty('id');
                expect(income).toHaveProperty('date');
                expect(income).toHaveProperty('amount');
            },
            error: err => {
                console.error(err);
                done();
            },
            complete: () => {
                console.log('Incomes Get Complete.');
                done();
            },
        });
    });

    it('POST method creates a new income', (done) => {
        incomesResource.post(
            {
                resource: {
                    id: 'nik',
                    date: { day: 1 },
                    amount: 200
                }
            },
            {
                /**
                 * @param {Object} ajaxResponse
                 *  .status {Number}
                 *  .response {Object}
                 *      Sample
                 *          { id: 'nik', date: { day: 1 }, amount: 200 }
                 */
                next: ajaxResponse => {
                    console.log('Income Create response ', ajaxResponse.response);
                    if (ajaxResponse.status === 201) {
                        console.log('Income Create Success');
                    } else {
                        console.log('Income Create Failure with code ', ajaxResponse.status);
                    }
                },
                error: err => {
                    console.error(err);
                    done();
                },
                complete: () => {
                    console.log('Incomes Get Complete.');
                    done();
                },
            }
        );
    });

    it('DELETE method deletes the defined income', (done) => {
        incomesResource.del(
            {
                resourceId: 'nik'
            },
            {
                next: ajaxResponse => {
                    console.log('Income Delete response ', ajaxResponse.response);
                    if (ajaxResponse.status === 200) {
                        console.log('Income Delete Success');
                    } else {
                        console.log('Income Delete Failure with code ', ajaxResponse.status);
                    }
                },
                error: err => {
                    console.error(err);
                    done();
                },
                complete: () => {
                    console.log('Income Delete Complete.');
                    done();
                },
            }
        );
    });

});