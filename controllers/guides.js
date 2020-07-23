// @desc    Create guide
// @route   POST /api/v1/guides
// @access  Private
exports.createGuide = (req, res, next) => {
    res
        .status(200)
        .json({ success: true, msg: `Create guide` })
};

// @desc    Get single guide
// @route   GET /api/v1/guides/:id
// @access  Public
exports.getGuide = (req, res, next) => {
    res
        .status(200)
        .json({ success: true, msg: `Get guide with id ${req.params.id}` })
};

// @desc    Get all guides
// @route   GET /api/v1/guides
// @access  Public
exports.getGuides = (req, res, next) => {
    res
        .status(200)
        .json({ success: true, msg: 'Get all guides' });
};

// @desc    Update guide
// @route   PUT /api/v1/guides/:id
// @access  Public
exports.updateGuide = (req, res, next) => {
    res
        .status(200)
        .json({ success: true, msg: `Update guide with id ${req.params.id}` })
};

// @desc    Delete guide
// @route   DELETE /api/v1/guides/:id
// @access  Public
exports.deleteGuide = (req, res, next) => {
    res
        .status(200)
        .json({ success: true, msg: `Delete guide with id ${req.params.id}` })
};

