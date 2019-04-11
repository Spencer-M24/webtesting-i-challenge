const enhancer = require("./enhancer.js");
// test away!


describe("enhancer.js", () => {
    
    // Repair Section
    describe("repair()", () => {



        it("new item return 100% durability", () => {

            expect(



                enhancer.repair({

                    name: "",

                    enhancement: 15,

                    durability: 90


                })

                ).toEqual({

                    name: "",

                    enhancement: 15,

                    durability: 100

                });

            });
    });


    // Success

    describe("succeed()", () => {
        it("return with new item  enhancement value", () => {
    
            expect({
    
                name: "",
    
    
                enhancement: 20,
    
                durability: 100
    
            }).toEqual({
    
    
                name: "",
    
                enhancement: 20,
    
                durability: 100
    
            });
    
        });


        
        it("new item adding value of + 1", () => {
        
            expect(
        
                enhancer.succeed({
        
                    name: "",
        
                    enhancement: 15,
        
                    durability: 100
        
        
                })
        
                ).toEqual({
        
                    name: "",
        
                    enhancement: 16,
        
                    durability: 100
        
                });
        
            });

// Last Part Enhancer
            it("returning the new item minus the durability on the enchance value", () => {
                
            expect(
        
                enhancer.fail({ name: "", enhancement: 14, durability: 100 })
        
        
                ).toEqual({
                name: "",
        
        
                enhancement: 14,
        
                durability: 95
        
            });
        
        });


        
        it("return new item minus durability  on the value of enhancement", () => {
                    
            expect(
        
                enhancer.fail({ name: "", enhancement: 15, durability: 100 })
        
                ).toEqual({
        
                    name: "",
        
                    enhancement: 15,
        
                    durability: 90
        
                });
        
            });
    });

});




