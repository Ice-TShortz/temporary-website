import {
  pgTable,
  serial,
  text,
  integer,
  numeric,
  timestamp,
  varchar,
  boolean,
} from "drizzle-orm/pg-core";

export const vessels = pgTable("vessels", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  imo: varchar("imo", { length: 20 }).notNull(),
  type: text("type").notNull(),
  category: text("category").notNull(),
  yearBuilt: integer("year_built").notNull(),
  flag: text("flag").notNull(),
  homePort: text("home_port").notNull(),
  classification: text("classification").notNull(),
  status: text("status").notNull(),
  lengthM: numeric("length_m", { precision: 6, scale: 1 }).notNull(),
  beamM: numeric("beam_m", { precision: 5, scale: 1 }).notNull(),
  deadweightT: integer("deadweight_t").notNull(),
  bollardPullT: integer("bollard_pull_t"),
  enginePowerBhp: integer("engine_power_bhp").notNull(),
  deckAreaSqm: integer("deck_area_sqm"),
  crewCapacity: integer("crew_capacity").notNull(),
  description: text("description").notNull(),
  featured: boolean("featured").notNull().default(false),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  company: text("company"),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const newsletterSubscribers = pgTable("newsletter_subscribers", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const jobApplications = pgTable("job_applications", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  position: text("position").notNull(),
  message: text("message"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});
