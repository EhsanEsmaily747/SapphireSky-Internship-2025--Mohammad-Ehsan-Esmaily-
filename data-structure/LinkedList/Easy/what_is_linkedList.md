What is a linked list, and how does it differ from an array?

A Linked List is a data structure where elements (called nodes) are stored in memory non-contiguously. Each node contains:
Data (the actual value)
A pointer (reference) to the next node


Feature	            Linked List	                    Array
Memory	            Dynamic (scattered)	            Contiguous
Insert/Delete	    O(1) (at head)	                O(n) (shifting required)
Access	            O(n) (traverse from head)	    O(1) (direct indexing)
Extra Space	        Requires pointers (next)	    No extra storage needed

