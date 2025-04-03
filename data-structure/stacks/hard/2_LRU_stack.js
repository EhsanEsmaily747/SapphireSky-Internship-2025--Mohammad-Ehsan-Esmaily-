// Implement an LRU (Least Recently Used) cache using a stack.
class LRUCache{
    constructor(size){
        this.size = size
        this.stack = []
    }
    access(element){
        const index = this.stack.indexOf(element)
        if(index === -1){
            if (this.stack.length === this.size) {
                this.stack.shift()
            }
            this.stack.push(element)
        }else{
            const target = this.stack.splice(index, 1)
            this.stack.push(target[0])
        }
    }
    getCache(){
        return this.stack
    }
}




function testLRUCache() {
    console.log("Starting LRU Cache Tests...\n");

    // Create an LRU Cache of size 3
    const cache = new LRUCache(3);

    // Access elements
    cache.access(1);
    cache.access(2);
    cache.access(3);
    console.log(cache.getCache()); // Expected: [1, 2, 3]

    // Access an existing element (should move to top)
    cache.access(2);
    console.log(cache.getCache()); // Expected: [1, 3, 2]

    // Add a new element (should remove LRU: 1)
    cache.access(4);
    console.log(cache.getCache()); // Expected: [3, 2, 4]

    // Access 3 again (should move to top)
    cache.access(3);
    console.log(cache.getCache()); // Expected: [2, 4, 3]

    // Add a new element (should remove LRU: 2)
    cache.access(5);
    console.log(cache.getCache()); // Expected: [4, 3, 5]

    console.log("\nAll LRU Cache Tests Passed!");
}

// Run tests
testLRUCache();
