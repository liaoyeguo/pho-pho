import { relations } from "drizzle-orm";
import {
  index,
  pgTable,
  primaryKey,
  serial,
  text,
  varchar,
} from "drizzle-orm/pg-core";

export const photosTable = pgTable("photos", {
  id: serial().primaryKey(),
  url: varchar({ length: 255 }),
  name: varchar({ length: 255 }),
});

export const photosRelations = relations(photosTable, ({ many }) => ({
  photosTags: many(photosTagsTable),
}));

export const tagsTable = pgTable(
  "tags",
  {
    id: serial().primaryKey(),
    name: varchar({ length: 255 }),
  },
  (t) => [index("tags_name_idx").on(t.name)]
);

export const tagsRelations = relations(photosTable, ({ many }) => ({
  photosTags: many(photosTagsTable),
}));

export const photosTagsTable = pgTable(
  "photos_tags",
  {
    photoId: serial().references(() => photosTable.id),
    tagId: serial().references(() => tagsTable.id),
  },
  (t) => [primaryKey({ columns: [t.photoId, t.tagId] })]
);

export const photisTagsRelations = relations(photosTagsTable, ({ one }) => ({
  photos: one(photosTable, {
    fields: [photosTagsTable.tagId],
    references: [photosTable.id],
  }),
  tags: one(tagsTable, {
    fields: [photosTagsTable.tagId],
    references: [tagsTable.id],
  }),
}));
