/**
 * One-time seed: admin user, services, testimonials, team members, and blog posts
 * migrated from cryospaclinics.com.au. Run with: pnpm seed
 */
import { getPayload } from "payload";
import config from "@payload-config";
import { runMigration } from "../scripts/migrate-blog-posts";

async function seed() {
  const payload = await getPayload({ config });

  console.log("🌱 Starting seed process...");

  // Create admin user
  const existingAdmins = await payload.find({
    collection: "users",
    where: { email: { equals: "admin@cryospaclinics.com" } },
  });
  if (existingAdmins.totalDocs === 0) {
    await payload.create({
      collection: "users",
      data: {
        email: "admin@cryospaclinics.com",
        password: "cryospa2026!",
        name: "Admin",
        role: "admin",
      },
    });
    console.log("✅ Admin user created");
  } else {
    console.log("ℹ️ Admin user already exists");
  }

  // Seed Services
  const services = [
    {
      title: "Infrared Sauna",
      slug: "infrared-sauna",
      category: "sauna",
      shortDescription:
        "Experience the healing warmth of our premium Clearlight infrared saunas, designed to penetrate deep into your tissues for maximum benefit.",
      duration: "30-45 minutes",
      price: 45,
      priceNote: "per session",
      icon: "fire",
      featured: true,
      order: 2,
    },
    {
      title: "Himalayan Salt Room",
      slug: "salt-room",
      category: "salt-therapy",
      shortDescription:
        "Step into our authentic Himalayan salt cave and experience the respiratory and skin benefits that have been known for over 170 years.",
      duration: "45 minutes",
      price: 35,
      priceNote: "per session",
      icon: "salt",
      featured: true,
      order: 3,
    },
    {
      title: "Red Light Therapy",
      slug: "red-light-therapy",
      category: "light-therapy",
      shortDescription:
        "Harness the power of specific red light wavelengths to boost cellular energy, rejuvenate skin, and support muscle recovery.",
      duration: "20 minutes",
      price: 40,
      priceNote: "per session",
      icon: "light",
      featured: true,
      order: 4,
    },
    {
      title: "Normatec Compression",
      slug: "normatec-compression",
      category: "compression",
      shortDescription:
        "Advanced compression technology used by elite athletes for faster recovery, improved circulation, and reduced muscle soreness.",
      duration: "30 minutes",
      price: 35,
      priceNote: "per session",
      icon: "compression",
      featured: true,
      order: 5,
    },
    {
      title: "Contrast Therapy",
      slug: "contrast-therapy",
      category: "sauna",
      shortDescription:
        "Alternate between hot and cold treatments to stimulate blood flow, reduce inflammation, and accelerate recovery.",
      duration: "30 minutes",
      price: 75,
      priceNote: "per session",
      icon: "snowflake",
      featured: false,
      order: 6,
    },
    {
      title: "Lymphatic Drainage",
      slug: "lymphatic-drainage",
      category: "massage",
      shortDescription:
        "Specialized massage technique that encourages the natural drainage of the lymph, helping to detoxify your body and boost immune function.",
      duration: "60 minutes",
      price: 95,
      priceNote: "per session",
      icon: "hands",
      featured: false,
      order: 7,
    },
    {
      title: "Massage Therapy",
      slug: "massage",
      category: "massage",
      shortDescription:
        "Our skilled therapists offer a range of massage treatments to relieve tension, reduce stress, and promote overall wellbeing.",
      duration: "30-60 minutes",
      price: 70,
      priceNote: "from",
      icon: "hands",
      featured: false,
      order: 8,
    },
    {
      title: "Premium Facials",
      slug: "facials",
      category: "facial",
      shortDescription:
        "Rejuvenate your skin with our premium facial treatments, using high-quality products and expert techniques for visible results.",
      duration: "45-60 minutes",
      price: 85,
      priceNote: "from",
      icon: "face",
      featured: false,
      order: 9,
    },
  ];

  for (const service of services) {
    const existing = await payload.find({
      collection: "services",
      where: { slug: { equals: service.slug } },
    });
    if (existing.totalDocs === 0) {
      await payload.create({
        collection: "services",
        data: service,
      });
      console.log(`✅ Created service: ${service.title}`);
    } else {
      console.log(`ℹ️ Service ${service.title} already exists`);
    }
  }

  // Seed Testimonials
  const testimonials = [
    {
      customerName: "Emily Collinson",
      content:
        "Had an amazing time, the studio is clean and beautiful and the sauna rooms are SO spacious. I went with a friend and we had an amazing time and left feeling amazing. Going to sleep like a dream tonight!",
      rating: 5,
      featured: true,
    },
    {
      customerName: "Omelio Vlahos",
      content:
        "This has long been my go to place for recovery. From the great service and the top notch facilities and atmosphere I couldn't imagine going anywhere else. Mitch and his team have done a great job.",
      rating: 5,
      featured: true,
    },
    {
      customerName: "Lara Nercessian",
      content:
        "I had a really positive experience at Cryospa Clinics. The customer service, facilities and services were wonderful. I used the infrared sauna and will most certainly be back to try more treatments.",
      rating: 5,
      featured: true,
    },
    {
      customerName: "Patrick Nguyen",
      content:
        "Amazing place, really clean and super friendly staff! Clearlight sauna too which is top of the line. Would highly recommend to anyone looking for quality wellness treatments.",
      rating: 5,
      featured: true,
    },
    {
      customerName: "Inez Bye",
      content:
        "Had infrared sauna and salt room treatments and enjoyed every minute on a chilly Saturday afternoon. Left the clinic feeling more relaxed in all my sore muscles and have been sleeping like a baby!",
      rating: 5,
      featured: false,
    },
    {
      customerName: "Tamara Gabriel",
      content:
        "Absolutely blown away by the level of service and positive energy in this practice. I attended Cryospa for a few treatments. Infrared sauna and the salt room. I was blown away by each experience.",
      rating: 5,
      featured: false,
    },
  ];

  for (const testimonial of testimonials) {
    const existing = await payload.find({
      collection: "testimonials",
      where: { customerName: { equals: testimonial.customerName } },
    });
    if (existing.totalDocs === 0) {
      await payload.create({
        collection: "testimonials",
        data: testimonial,
      });
      console.log(`✅ Created testimonial from: ${testimonial.customerName}`);
    } else {
      console.log(`ℹ️ Testimonial from ${testimonial.customerName} already exists`);
    }
  }

  // Seed Team Members (before blog migration so authors can be resolved)
  const teamMembers = [
    {
      name: "Mitch",
      role: "Founder & Director",
      bio: "Passionate about wellness and helping people achieve their health goals through innovative treatments.",
      order: 1,
    },
    {
      name: "Sarah",
      role: "Wellness Consultant",
      bio: "Experienced wellness professional dedicated to providing personalized treatment recommendations.",
      order: 2,
    },
  ];

  for (const member of teamMembers) {
    const existing = await payload.find({
      collection: "team-members",
      where: { name: { equals: member.name } },
    });
    if (existing.totalDocs === 0) {
      await payload.create({
        collection: "team-members",
        data: member,
      });
      console.log(`✅ Created team member: ${member.name}`);
    } else {
      console.log(`ℹ️ Team member ${member.name} already exists`);
    }
  }

  // Migrate blog posts from old site (cryospaclinics.com.au)
  console.log("\n📥 Migrating blog posts from cryospaclinics.com.au...");
  const stats = await runMigration(payload, (slug, status) => {
    process.stdout.write(`  ${slug} ... ${status}\n`);
  });
  console.log(
    `✅ Blog migration: ${stats.created} created, ${stats.updated} updated, ${stats.skipped} skipped, ${stats.failed} failed\n`,
  );

  console.log("🎉 Seed process completed!");
  return { blogStats: stats };
}

// Run when executed as script (pnpm seed via API, not directly — see package.json)
const isRunDirectly = typeof process !== "undefined" && process.argv[1]?.endsWith("seed/index.ts");
if (isRunDirectly) {
  seed()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error("Error seeding database:", err);
      process.exit(1);
    });
}

export { seed };
