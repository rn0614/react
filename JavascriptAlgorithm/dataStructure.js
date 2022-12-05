// datastructure

// 특정 문제에 한해 특정 자료구조가 효율적

// 연결리스트
// 쌍방향 연결리스트
// 트리
// 힙



// 연결리스트 . 앞쪽 제거 및 추가 (stack 구조형에 유리1)



// tree  하나의 root 를 가지며 모든 노드는 root로 부터 멀어지는 형태

// 이진 트리 자식노드의 수가 0,1,2인 tree

class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaraySearchTree{
    constructor(){
        this.root = null;
    }
}

var tree = new BinaraySearchTree();
tree.root = new Node(10);
tree.root.right = new Node()


function bfs(){
    var node=this.root;
    var data = [];
    var queue = [];
    queue.push(this.root);
    while(queue.length){
        // 현 queue에서 하나 추출
        node = queue.shift();
        // 동작코드 위치
        data.push(node);
        // 현재 추출된 node의 하위 node 추가
        if(node.lefet) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }
    return data;
}



// dfs 에는 pre, post , inorder  3가지가 존재

function dfs_pre(){
    //최초값과 반환값 선언
    var current=this.root;
    var data = [];
    // input : 입력값, 재귀함수로    
    function traverse(node){
        // 동작코드 위치
        data.push(node.value);
        if(node.left) traverse(node.left);
        if(node.right) traverse(node.right);
    }
    traverse(current);
    return data;
}

function dfs_inorder(){
    var data =[];
    function traverse(node){
        node.left&& traverse(node.left)
        data.push(node.value);
        node.right && traverse(node.right);
    }
    traverse(this.root);
    return data;
}

class MaxBinaryHeap{
    constructor(){
        this.values=[41,39,33,18,27,12];
    }
    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp(){
        let udx = this.values.length -1;
        const element = this.values[idx];
        while(idx>0){
            let parentIdx = Math.floor((idx-1)/2);
            let parent = this.values[parentIdx];
            if(element <= parent) break;
            this.values[parentIdx] =element;
            this.values[idx] = parent;
            idx=parentIdx;
        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(55);


new Map()