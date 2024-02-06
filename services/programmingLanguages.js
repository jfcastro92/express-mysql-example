import { query } from './db.js';
import listPerPage from '../config.js';

import { getOffset, emptyOrRows } from '../helper.js';

async function getMultiple(page = 1){
  const offset = getOffset(page, listPerPage.listPerPage);
  const rows = await query(
    `SELECT id, name, group, section, country, url, image, pdf 
    FROM localhost.dog_breed LIMIT ${offset},${listPerPage.listPerPage}`
  );
  const data = emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function create(dog_breed){
    const result = await db.query(
      `INSERT INTO dog_breed 
      (name, group, section, provisional, country, url, image, pdf) 
      VALUES 
      ('${dog_breed.name}', ${dog_breed.group}, ${dog_breed.section}, 
      ${dog_breed.provisional}, ${dog_breed.country},  ${dog_breed.url},  
      ${dog_breed.image},  ${dog_breed.pdf})`
    );
  
    let message = 'Error in creating dog_breed';
  
    if (result.affectedRows) {
      message = 'dog_breed created successfully';
    }
  
    return {message};
}

async function update(id, dog_breed){
    const result = await db.query(
      `UPDATE dog_breed 
      SET name="${dog_breed.name}", group=${dog_breed.group}, section=${dog_breed.section}, 
      provisional=${dog_breed.provisional}, country=${dog_breed.country}, url=${dog_breed.url},
      image=${dog_breed.image}, pdf=${dog_breed.pdf}   
      WHERE id=${id}` 
    );
  
    let message = 'Error in updating Dog Breed';
  
    if (result.affectedRows) {
      message = 'Dog Breed updated successfully';
    }
  
    return {message};
}

async function remove(id){
    const result = await db.query(
      `DELETE FROM dog_breed WHERE id=${id}`
    );
  
    let message = 'Error in deleting Dog Breed';
  
    if (result.affectedRows) {
      message = 'Dog Breed deleted successfully';
    }
  
    return {message};
}

export {
  getMultiple, create, update, remove
}