import users from "@/models/users";

const initSeed = async () => {
  const getUser = await users.findOne({ username: "andrew", deletedAt: null });
  if (!getUser) {
    const newUser = new users({
      username: "andrew",
      firstName: "Andrew",
      lastName: "Sawit",
      role: "Admin",
      password: "cxSLFGS2PgBvFy@t9pYTEZx3SKK1SC",
      campaignId: null
    });
    await newUser.save();
  }
}

initSeed()