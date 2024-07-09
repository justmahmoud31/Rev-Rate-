import Reviewer from "../Models/Reviewer.js";
const BlockReviewer = async (req, res) => {
  try {
    const { reviewerId } = req.params;
    const reviewer = await Reviewer.findByPk(reviewerId);
    if (!reviewer) {
      return res.status(404).json({ message: "Reviewer not found" });
    }
    reviewer.isBlocked = 1;
    await reviewer.save();
    res.status(200).json({ message: "Reviewer blocked successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const unblockReviewer = async (req, res) => {
    try {
      const { reviewerId } = req.params;
      const reviewer = await Reviewer.findByPk(reviewerId);
  
      if (!reviewer) {
        return res.status(404).json({ message: "Reviewer not found" });
      }
  
      reviewer.isBlocked = 0;
      await reviewer.save();
  
      res.status(200).json({ message: "Reviewer unblocked successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

export default {BlockReviewer,unblockReviewer};
