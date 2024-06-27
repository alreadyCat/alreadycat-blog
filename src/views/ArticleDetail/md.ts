export default "## 1、Java 集合概览\n" +
"\n" +
"Java 集合，也叫作容器，主要是由两大接口派生而来：一个是 `Collection` 接口，主要用于存放单一元素；另一个是 `Map` 接口，主要用于存放键值对。对于 `Collection` 接口，下面又有三个主要的子接口：`List`、`Set` 、 `Queue`。\n" +
"\n" +
"<!--more-->\n" +
"![](https://blog-1259672777.cos.ap-nanjing.myqcloud.com/img/java%E9%9B%86%E5%90%88%E6%A6%82%E8%A7%88.png \"Java集合概览\")\n" +
"\n" +
"\n" +
"## 2、List, Set, Queue, Map 四者的区别？\n" +
"\n" +
"* List(对付顺序的好帮手): 存储的元素是有序的、可重复的。\n" +
"* Set(注重独一无二的性质): 存储的元素不可重复的。\n" +
"* Queue(实现排队功能的叫号机): 按特定的排队规则来确定先后顺序，存储的元素是有序的、可重复的。\n" +
"* Map(用 key 来搜索的专家): 使用键值对（key-value）存储，类似于数学上的函数 y=f(x)，\"x\" 代表 key，\"y\" 代表 value，key 是无序的、不可重复的，value 是无序的、可重复的，每个键最多映射到一个值。\n" +
"\n" +
"## 3、集合框架底层数据结构总结\n" +
"\n" +
"`Collection` 接口下面的集合。\n" +
"\n" +
"`List` \n" +
"\n" +
"* `ArrayList`：底层数据结构是数组，查询快，增删慢。\n" +
"* `LinkedList`：底层数据结构是双向链表，增删快，查询慢。\n" +
"* `Vector`：底层数据结构是数组，查询快，增删慢。\n" +
"\n" +
"`Set`\n" +
"\n" +
"* `HashSet`：底层数据结构是哈希表，查询快，增删\n" +
"* `TreeSet`：底层数据结构是红黑树(自平衡的排序二叉树)\n" +
"* `LinkedHashSet`：底层数据结构是双向链表+哈希表，查询快，增删慢。\n" +
"\n" +
"`Map` 接口下面的集合。\n" +
"\n" +
"* `HashMap`：JDK1.8 之前 `HashMap` 由数组+链表组成的，数组是 HashMap 的主体，链表则是主要为了解决哈希冲突而存在的（“拉链法”解决冲突）。JDK1.8 以后在解决哈希冲突时有了较大的变化，当链表长度大于阈值（默认为 8）（将链表转换成红黑树前会判断，如果当前数组的长度小于 64，那么会选择先进行数组扩容，而不是转换为红黑树）时，将链表转化为红黑树，以减少搜索时间。\n" +
"* `LinkedHashMap`：`LinkedHashMap` 继承自 `HashMap`，所以它的底层仍然是基于拉链式散列结构即由数组和链表或红黑树组成。另外，`LinkedHashMap` 在上面结构的基础上，增加了一条双向链表，使得上面的结构可以保持键值对的插入顺序。同时通过对链表进行相应的操作，实现了访问顺序相关逻辑。\n" +
"* `Hashtable`：数组+链表组成的，数组是 Hashtable 的主体，链表则是主要为了解决哈希冲突而存在的。\n" +
"* `TreeMap`：红黑树（自平衡的排序二叉树）。\n" +
"\n" +
"## 4、List \n" +
"\n" +
"**ArrayList 和 Array（数组）的区别？**\n" +
"ArrayList 内部基于动态数组实现，比 `Array`（静态数组） 使用起来更加灵活：\n" +
"\n" +
"* `ArrayList`会根据实际存储的元素动态地扩容或缩容，而 `Array` 被创建之后就不能改变它的长度了。\n" +
"* `ArrayList` 允许你使用泛型来确保类型安全，`Array` 则不可以。\n" +
"* `ArrayList` 中只能存储对象。\n" +
"* 对于基本类型数据，需要使用其对应的包装类（如 Integer、Double 等）。\n" +
"* `Array` 可以直接存储基本类型数据，也可以存储对象。\n" +
"* `ArrayList` 支持插入、删除、遍历等常见操作，并且提供了丰富的 API 操作方法，比如 add()、remove()等。\n" +
"* `Array` 只是一个固定长度的数组，只能按照下标访问其中的元素，不具备动态添加、删除元素的能力。\n" +
"* `ArrayList`创建时不需要指定大小，而`Array`创建时必须指定大小。\n" +
"\n" +
"简单对比：\n" +
"`Array`:\n" +
"\n" +
"```java\n" +
"public class Main {\n" +
"    public static void main(String[] args) {\n" +
"        String[] stringArr = new String[]{\"hello\",\"world\",\"!\"};\n" +
"        stringArr[0] = \"goodbye\"\n" +
"        System.out.println(Arrays.toString(stringArr)); // [goodbye, world, !]\n" +
"// 删除数组中的元素，需要手动移动后面的元素\n" +
"        for (int i = 0; i < stringArr.length - 1; i++) {\n" +
"            stringArr[i] = stringArr[i + 1];\n" +
"        }\n" +
"        stringArr[stringArr.length - 1] = null;\n" +
"        System.out.println(Arrays.toString(stringArr));// [world, !, null]\n" +
"    }\n" +
"}\n" +
"```\n" +
"\n" +
"`ArrayList`:\n" +
"\n" +
"```java\n" +
"import java.util.ArrayList;\n" +
"import java.util.Arrays;\n" +
"\n" +
"public class Main {\n" +
"    public static void main(String[] args) {\n" +
"        ArrayList<String> stringList = new ArrayList<>(Arrays.asList(\"hello\", \"world\", \"!\"));\n" +
"        // 添加元素到 ArrayList 中\n" +
"        stringList.add(\"goodbye\");\n" +
"        System.out.println(stringList);// [hello, world, !, goodbye]\n" +
"        // 修改 ArrayList 中的元素\n" +
"        stringList.set(0, \"hi\");\n" +
"        System.out.println(stringList);// [hi, world, !, goodbye]\n" +
"        // 删除 ArrayList 中的元素\n" +
"        stringList.remove(0);\n" +
"        System.out.println(stringList); // [world, !, goodbye]\n" +
"    }\n" +
"}\n" +
"```\n" +
"\n" +
"## 5、ArrayList的扩容机制\n" +
"\n" +
"详见这篇文章[https://javaguide.cn/java/collection/arraylist-source-code.html#arraylist-%E7%AE%80%E4%BB%8B](https://javaguide.cn/java/collection/arraylist-source-code.html#arraylist-%E7%AE%80%E4%BB%8B)\n" +
"\n" +
"## 6、Set无序性和不可重复性的含义是什么\n" +
"\n" +
"* 无序性不等于随机性 ，无序性是指存储的数据在底层数组中并非按照数组索引的顺序添加 ，而是根据数据的哈希值决定的。\n" +
"* 不可重复性是指添加的元素按照 equals() 判断时 ，返回 false，需要同时重写 equals() 方法和 hashCode() 方法。\n" +
"\n" +
"\n" +
"## 7、Map\n" +
"\n" +
"**HashMap 和 Hashtable 的区别**\n" +
"\n" +
"- 线程是否安全： `HashMap` 是非线程安全的，`Hashtable` 是线程安全的,因为 `Hashtable` 内部的方法基本都经过 `synchronized` 修饰。（如果你要保证线程安全的话就使用 `ConcurrentHashMap` ！）；\n" +
"- 效率： 因为线程安全的问题，`HashMap` 要比 `Hashtable` 效率高一点。另外，`Hashtable` 基本被淘汰，不要在代码中使用它；\n" +
"- 对` Null key `和` Null value` 的支持： `HashMap` 可以存储 null 的 key 和 value，但 null 作为键只能有一个，null 作为值可以有多个；`Hashtable` 不允许有 null 键和 null 值，否则会抛出 `NullPointerException`。\n" +
"- 初始容量大小和每次扩充容量大小的不同： \n" +
"  - ① 创建时如果不指定容量初始值，`Hashtable` 默认的初始大小为 11，之后每次扩充，容量变为原来的 2n+1。HashMap 默认的初始化大小为 16。之后每次扩充，容量变为原来的 2 倍。\n" +
"  - ② 创建时如果给定了容量初始值，那么 `Hashtable` 会直接使用你给定的大小，而 `HashMap` 会将其扩充为 2 的幂次方大小（`HashMap` 中的 `tableSizeFor()`方法保证）。也就是说 `HashMap` 总是使用 2 的幂作为哈希表的大小。\n" +
"- 底层数据结构： JDK1.8 以后的 `HashMap` 在解决哈希冲突时有了较大的变化，当链表长度大于阈值（默认为 8）时，将链表转化为红黑树（将链表转换成红黑树前会判断，如果当前数组的长度小于 64，那么会选择先进行数组扩容，而不是转换为红黑树），以减少搜索时间（后文中我会结合源码对这一过程进行分析）。`Hashtable` 没有这样的机制。"