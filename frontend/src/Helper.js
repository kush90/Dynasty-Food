import * as XLSX from 'xlsx';
import emailjs from 'emailjs-com';

export const readExcelFile1 = async (sampleFile) => {
  const response = await fetch(sampleFile);
  const buffer = await response.arrayBuffer();
  const workbook = XLSX.read(buffer, { type: 'buffer' });
  const sheetName = workbook.SheetNames[0]; // Assuming data is in the first sheet
  const sheet = workbook.Sheets[sheetName];
  const excelData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

  // Customize header names mapping
  const headerMap = {
    'Barcode': 'barCode',
    'Category': 'category',
    'Product Name': 'productName',
    // Add more mappings as needed
  };

  // Assuming the first row contains column headers
  const headers = excelData[0];
  const formattedData = excelData.slice(1).map(row => {
    return headers.reduce((acc, header, index) => {
      const mappedHeader = headerMap[header] || header; // Use the mapped header if available, otherwise use the original header
      acc[mappedHeader] = row[index];
      return acc;
    }, {});
  });
  const formattedDataWithImg = formattedData.map((row, index) => {
    const itemIndex = index % itemData.length; // Calculate the index in itemData
    const item = itemData[itemIndex];
    return {
      ...row,
      img: item ? item.img : null, // Assign img from itemData if available, otherwise null
    };
  });

  console.log('Formatted Data:', formattedDataWithImg);
  return formattedDataWithImg;
  // Set the state or call a function to handle the formatted Excel data
};

// read Excel file and filter data
export const readExcelFile2 = async (sampleFile, filterCriteria) => {
  console.log('criteria',filterCriteria)
  const response = await fetch(sampleFile);
  const buffer = await response.arrayBuffer();
  const workbook = XLSX.read(buffer, { type: 'buffer' });
  const sheetName = workbook.SheetNames[0]; // Assuming data is in the first sheet
  const sheet = workbook.Sheets[sheetName];
  const excelData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

  // Customize header names mapping
  const headerMap = {
    'Barcode': 'barCode',
    'Category': 'category',
    'Product Name': 'productName',
    'New arrival': 'New arrival',
    'Special Price': 'Special Price',
    'Best seller' : 'Best seller'
    // Add more mappings as needed
  };

  // Assuming the first row contains column headers
  const headers = excelData[0];
  const formattedData = excelData.slice(1).map(row => {
    return headers.reduce((acc, header, index) => {
      const mappedHeader = headerMap[header] || header; // Use the mapped header if available, otherwise use the original header
      acc[mappedHeader] = row[index];
      return acc;
    }, {});
  });
  const formattedDataWithImg = formattedData.map((row, index) => {
    const itemIndex = index % itemData.length; // Calculate the index in itemData
    const item = itemData[itemIndex];
    return {
      ...row,
      img: item ? item.img : null, // Assign img from itemData if available, otherwise null
    };
  });

  // Filter products based on the provided filterCriteria
  const filteredProducts = formattedDataWithImg.filter(product => {
    
      
        return product[filterCriteria] === true;

  });

  console.log('Filtered Products:', filteredProducts);
  return filteredProducts;
};
const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    description: 'lorem ipsum',
    price: 130,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    description: 'lorem ipsum',
    price: 150,
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    description: 'lorem ipsum',
    price: 80,
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    description: 'lorem ipsum',
    price: 90,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    description: 'lorem ipsum',
    price: 30,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    description: 'lorem ipsum',
    price: 30,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    description: 'lorem ipsum',
    price: 30,
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    description: 'lorem ipsum',
    price: 230,
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    description: 'lorem ipsum',
    price: 77,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    description: 'lorem ipsum',
    price: 330,
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    description: 'lorem ipsum',
    price: 200,
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    description: 'lorem ipsum',
    price: 30,
  },
];


export const sendEmail = async (form) => {
  return emailjs
    .send(
      'service_5bk7v4d',
      'template_qi6d2wm',
      form,
      'Wo7x7zrpc23-qAiEj'
    )
}
