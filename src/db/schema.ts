import {doublePrecision, pgTable, text, timestamp }  from "drizzle-orm/pg-core";

// here we have to define our database structure 
// how the data will be store , 
// in this the table name would be prodcuts
// the id is generated will be default and generate using uuid , v4 method
// not null is for that it should not be empty
// pgTable is , given by drizzel , that we are using the postgress table
export const productsTable = pgTable('products',{
    id:text('id').primaryKey().default("uuid_generate_v4()"),
    name:text('name').notNull(),
    imageId:text('imageId').notNull(),
    price:doublePrecision('price').notNull(),
    description:text('description'),
    createdAt : timestamp('createdAt').defaultNow(),
    updatedAt : timestamp('updatedAt').defaultNow(),
})


export type Product =  typeof productsTable.$inferSelect
