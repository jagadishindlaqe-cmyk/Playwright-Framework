import{test,expect} from '@playwright/test';

import fs from 'fs';
import{parseStringPromise} from 'xml2js';


test('Read XML test data', async () => {

    const xmlData = fs.readFileSync(
        'testdata/TestData.xml',
        'utf-8'
    );


    const result = await parseStringPromise(xmlData);

    const username = result.testData.username[0];
    const password = result.testData.password[0];
    const invoiceNumber = result.testData.invoiceNumber[0];
    const amount = result.testData.amount[0];
    const status = result.testData.status[0];

    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Invoice Number:', invoiceNumber);
    console.log('Amount:', amount);
    console.log('Status:', status);

    expect(username).toBe('admin');
    expect(invoiceNumber).toBe('INV001');
    expect(amount).toBe('5000');
    expect(status).toBe('PAID');

});