const express = require('express')
const {connectToXRPL, configColdAddress, configHotAddress, createTrustLine, sendToken, confirmBalance, trade,
     placeOffer, mintNFT, getNFT, burnNFT, createNFTSellOffer, createNFTBuyOffer, 
     cancleOffer, getOffers, acceptSellOffer, acceptBuyOffer, issueToken, autoBridging, createEscrow} = require('../controllers/xrplapi')

const router = express.Router()

router.route('/').get(connectToXRPL)
router.route('/configcoldwallet').get(configColdAddress)
router.route('/confighotwallet').get(configHotAddress)
router.route('/createtrustline').get(createTrustLine)
router.route('/issuetoken').get(issueToken)
router.route('/sendtoken').get(sendToken)
router.route('/checkbalance').get(confirmBalance)
//lookup offers
router.route('/trade').get(trade)

//place offers
router.route('/placeoffer').get(placeOffer)
// mint a NFT
router.route('/mint').post(mintNFT)
//get aNFT
router.route('/getnfts').get(getNFT)
//burn NFT
router.route('/burn').post(burnNFT)
router.route('/autobridging').get(autoBridging)
//create NFT sell offer
router.route('/nftselloffer').post(createNFTSellOffer)
//create NFT buy offer
router.route('/nftbuyoffer').post(createNFTBuyOffer)
 //get Offers
router.route('/getoffers').post(getOffers)
 //cancel Offer
router.route('/canceloffer').post(cancleOffer)
//acceptselloffer
 router.route('/acceptselloffer').post(acceptSellOffer)
 //acceptbuyoffer -check
 router.route('/acceptbuyoffer').post(acceptBuyOffer)
 //created escrow 
 router.route('/createescrow').post(createEscrow)

module.exports = router;