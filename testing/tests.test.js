import assert from "assert";
import test from "node:test";
import { getRegularTicket,getVIPTicket } from "../services/function.js";
import { ckeckEnoughMony } from "../classes/studentCls.js";
test.describe("check if have enough mony",()=>{
    test("if enough mony",()=>{
        assert.deepEqual(ckeckEnoughMony(500,325),true)
        assert.deepEqual(ckeckEnoughMony(320,321),false)
    })
})