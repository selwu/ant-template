const graph = {};
graph.a = ['b', 'd', 'c', 'j'];
graph.b = ['a', 'c', 'e', 'k'];
graph.c = ['b', 'f', 'l', 'a'];
graph.d = ['a', 'e', 'f', 'g'];
graph.e = ['b', 'd', 'h', 'f'];
graph.f = ['c', 'e', 'i', 'd'];
graph.g = ['d', 'i', 'g', 'h'];
graph.h = ['e', 'i', 'k', 'g'];
graph.i = ['f', 'l', 'h', 'g'];
graph.j = ['g', 'k', 'a', 'l'];
graph.k = ['j', 'l', 'h', 'b'];
graph.l = ['i', 'k', 'j', 'c'];

function go(graph, start, end) {
  let queue = [];
  queue.push(start);
  let count = 0;
  while (queue.length > 0) {
    const current = queue.shift();
    if (!graph[current]) {
      return (graph[current] = []);
    }
    if (graph[current].includes(end)) {
      return count;
    } else {
      count += 1;

      queue = [...queue, ...graph[current]];
    }
  }
}

console.log(go(graph, 'k', 'f'));
