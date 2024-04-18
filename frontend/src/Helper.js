import * as XLSX from 'xlsx';
import sampleFile from './assets/sample.xls';
import emailjs from 'emailjs-com';


export const readExcelFile = async () => {
  const response = await fetch(sampleFile);
  const buffer = await response.arrayBuffer();
  const workbook = XLSX.read(buffer, { type: 'buffer' });
  const sheetName = workbook.SheetNames[0]; // Assuming data is in the first sheet
  const sheet = workbook.Sheets[sheetName];
  const excelData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
  console.log('Excel Data:', excelData);
  return excelData;
  // Set the state or call a function to handle the Excel data
};

export const sendEmail = async (form) => {
  return emailjs
    .send(
      'service_5bk7v4d',
      'template_qi6d2wm',
      form,
      'Wo7x7zrpc23-qAiEj'
    )
}
