import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const products = sqliteTable("products", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
});

export const skus = sqliteTable("skus", {
  sku: text("sku").primaryKey(),
  productId: text("productId").references(() => products.id),
  stock: integer("stock").notNull(),
});
