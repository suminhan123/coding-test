class TrieNode {
  constructor() {
    this.children = {};
    this.endWord = false;
  }
}
class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;

    for (const str of word) {
      if (!node.children[str]) {
        node.children[str] = new TrieNode();
      }
      node = node.children[str];
    }
    node.endWord = true;
  }
}
const trie = new Trie();
trie.insert("apple");
