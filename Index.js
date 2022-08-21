const img=document.querySelector("#zombie")
const count=document.querySelector("#count")
const buyWoodS=document.querySelector("#wooden_Sword")
const woodPrice=document.querySelector("#woodPrice")
const woodinv=document.querySelector("#woodInv")
const buyStoneS=document.querySelector("#stone_Sword")
const stonePrice=document.querySelector("#stonePrice")
const stoneinv=document.querySelector("#stoneInv")
const buyIronS=document.querySelector("#iron_Sword")
const ironPrice=document.querySelector("#ironPrice")
const ironinv=document.querySelector("#ironInv")
const buyGoldS=document.querySelector("#gold_Sword")
const goldPrice=document.querySelector("#goldPrice")
const goldinv=document.querySelector("#goldInv")
const buyDiamondS=document.querySelector("#diamond_Sword")
const diamondPrice=document.querySelector("#diamondPrice")
const diamondinv=document.querySelector("#diamondInv")

let clicks = 0
let woodSwordCost = 10
let woodStock =0
let stoneSwordCost = 1000
let stoneStock = 0
let ironSwordCost = 100000
let ironStock = 0
let goldSwordCost = 1000000
let goldStock = 0
let diamondSwordCost = 10000000
let diamondStock = 0



function addCount(){
    clicks=clicks+1   
    console.log(clicks)
    count.innerText=clicks
}

// Upgrades

function buyWood(){
  if(clicks >= woodSwordCost){
    clicks = clicks - woodSwordCost
    woodStock = woodStock+1
    woodSwordCost = Math.round(woodSwordCost*1.15)
    count.innerText=clicks-woodStock
    woodinv.innerText= woodStock
    woodPrice.innerText= woodSwordCost
    console.log(woodStock)

  }
}

function buyStone(){
  if(clicks >= stoneSwordCost){
    clicks = clicks - stoneSwordCost
    stoneStock = stoneStock+1
    stoneSwordCost = Math.round(stoneSwordCost*1.15)
    count.innerText=clicks-stoneStock
    stoneinv.innerText= stoneStock
    stonePrice.innerText= stoneSwordCost
    console.log(stoneStock)


  }
}

function buyIron(){
  if(clicks >= ironSwordCost){
    clicks = clicks - ironSwordCost
    ironStock = ironStock+1
    ironSwordCost = Math.round(ironSwordCost*1.15)
    count.innerText=clicks-woodStock
    ironinv.innerText= ironStock
    ironPrice.innerText= ironSwordCost
    console.log(ironStock)

  }
}

function buyGold(){
  if(clicks >= goldSwordCost){
    clicks = clicks - goldSwordCost
    goldStock = goldStock+1
    goldSwordCost = Math.round(goldSwordCost*1.15)
    count.innerText=clicks-woodStock
    goldinv.innerText= goldStock
    goldPrice.innerText= goldSwordCost
    console.log(goldStock)

  }
}

function buyDiamond(){
  if(clicks >= diamondSwordCost){
    clicks = clicks - diamondSwordCost
    diamondStock = diamondStock+1
    diamondSwordCost = Math.round(diamondSwordCost*1.15)
    count.innerText=clicks-woodStock
    diamondinv.innerText= diamondStock
    diamondPrice.innerText= diamondSwordCost
    console.log(diamondStock)

  }
}

img.addEventListener("click",()=> addCount())
buyWoodS.addEventListener("click",()=> buyWood())
buyStoneS.addEventListener("click",()=> buyStone())
buyIronS.addEventListener("click",()=> buyIron())
buyGoldS.addEventListener("click",()=> buyGold())
buyDiamondS.addEventListener("click",()=> buyDiamond())
