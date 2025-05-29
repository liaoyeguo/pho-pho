CREATE TABLE "photos" (
	"id" serial PRIMARY KEY NOT NULL,
	"url" text
);
--> statement-breakpoint
CREATE TABLE "photos_tags" (
	"photo_id" serial NOT NULL,
	"tag_id" serial NOT NULL,
	CONSTRAINT "photos_tags_photo_id_tag_id_pk" PRIMARY KEY("photo_id","tag_id")
);
--> statement-breakpoint
CREATE TABLE "tags" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255)
);
--> statement-breakpoint
ALTER TABLE "photos_tags" ADD CONSTRAINT "photos_tags_photo_id_photos_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."photos"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "photos_tags" ADD CONSTRAINT "photos_tags_tag_id_tags_id_fk" FOREIGN KEY ("tag_id") REFERENCES "public"."tags"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "tags_name_idx" ON "tags" USING btree ("name");