# 数字货币技术理论课实验报告

## 小组成员

- 2021131112-陈俊良 （组长）
- 2021131115-王栋
- 2021131087-陆冰玲
- 2021131114-席敬人
- 2021131086-郭延妍
- 2021131091-汪楠

## 代码仓库链接

https://github.com/ChuanYuei/blockchain-in-js-workshop-2021



## 第一课代码


### 代码 commint 地址

https://github.com/ChuanYuei/blockchain-in-js-workshop-2021/commit/3f38262ff76d17ae3c1595d0b557cfd971da5a4f

### 代码截图

> 将截图上传至网盘，放入链接即可
![1](https://s3.bmp.ovh/imgs/2023/05/11/655d1bb3aa63bed8.png)


### 主观与讨论题内容

总体思路是根据数据构建默克尔树，通过递归验证每个节点的哈希值，从而确保数据的完整性。该实现简洁地展示了默克尔树的构建和验证过程，并可根据实际需求进行扩展和使用

1. 定义了默克尔树节点类（`MerkleNode`），包含节点数据、哈希值以及左右子节点。

2. 构建默克尔树的函数（`buildMerkleTree`）接受数据数组作为输入，将数据转换为叶子节点，并逐层进行哈希运算，构建默克尔树，最终返回根节点。

3. 哈希计算函数（`calculateHash`）使用 SHA-256 算法对给定的数据进行哈希运算，并返回哈希值。

4. 验证默克尔树的函数（`verifyMerkleTree`）通过递归方式验证每个节点的哈希值是否正确，从根节点开始逐层向下验证。

5. 示例用法中，给定一个交易数组，调用`buildMerkleTree`函数构建默克尔树，并使用`verifyMerkleTree`函数验证树的正确性。最后，输出默克尔根的哈希值和验证结果。


## 第二课代码


### 代码 commint 地址
[https://github.com/Kiritokuto/blockchain-in-js-workshop-2021.git](https://github.com/Kiritokuto/blockchain-in-js-workshop-2021/commit/ced891abe5e973578ec2d842bc6cc091c3f2626c)

### 代码截图

> 将截图上传至网盘，放入链接即可

![2](https://s3.bmp.ovh/imgs/2023/05/17/fcac0185d0881348.png)

### 主观与讨论题内容

总体思路：
定义字典树节点类TrieNode，包含isEndOfWord属性表示是否为字符串的结束节点，以及children数组用于存储字符到子节点的映射关系。

定义字典树类Trie，包含根节点root。

在Trie类中，实现insert(word)方法用于向字典树中插入一个字符串。
遍历字符串的每个字符，根据字符获取对应的索引，检查当前节点的子节点中是否存在该索引。如果不存在，则创建一个新的节点并存储到相应的索引位置。
移动到下一个节点，重复该过程直到遍历完整个字符串。最后，标记最后一个节点为字符串的结束节点。

在Trie类中，实现search(word)方法用于搜索一个字符串是否在字典树中。
遍历字符串的每个字符，根据字符获取对应的索引，检查当前节点的子节点中是否存在该索引。
如果不存在，则字符串不存在于字典树中，返回false。移动到下一个节点，重复该过程直到遍历完整个字符串。
最后，检查最后一个节点是否为字符串的结束节点，返回相应的结果。

在Trie类中，实现startsWith(prefix)方法用于检查字典树中是否存在以给定前缀开头的字符串。
遍历前缀的每个字符，根据字符获取对应的索引，检查当前节点的子节点中是否存在该索引。
如果不存在，则前缀不存在于字典树中，返回false。移动到下一个节点，重复该过程直到遍历完整个前缀。如果能够顺利遍历完前缀，返回true。

创建一个Trie对象，并进行示例用法的测试。插入字符串"apple"和"banana"到字典树中，并进行搜索和前缀检查操作，打印结果。



## 第三课代码


### 代码 commint 地址

[提交地址](https://github.com/Kiritokuto/blockchain-in-js-workshop-2021/commits/lesson1)

### 代码截图

![3](https://s3.bmp.ovh/imgs/2023/05/26/623ed94eae4508d7.png)
![4](https://s3.bmp.ovh/imgs/2023/05/26/86773269561ed558.png)

> 将截图上传至网盘，放入链接即可


### 主观与讨论题内容
整体思路如下：

定义初始状态（initialState），包含世界各国的信息。
编写 reducer 函数（worldReducer），根据不同的 action 类型来更新状态。在本例中，我们定义了添加国家和移除国家两种操作。
创建 Redux store，并将 reducer 函数传入。这将创建一个用于管理状态的 store 对象。
使用 store.getState() 获取当前状态，并打印初始状态。
使用 store.dispatch() 发送 action 来触发状态更新。在本例中，我们先添加一个新国家，然后移除一个国家。
使用 store.getState() 获取更新后的状态，并打印出来。
通过以上步骤，我们使用 Redux 架构创建了一个简单的世界状态树，并进行了验证。你可以根据需求扩展该示例，添加更多的 action 类型和相应的状态更新逻辑。
