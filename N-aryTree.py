graph = [
  {
    'id': "parent1",
    'name': "parent1",
    'children': [
      {
        'id': "parent1-1",
        'name': "parent1-1"
      },
      {
        'id': "parent1-2",
        'name': "parent1-2",
        "children": [
          {
            'id': "parent1-2-1",
            'name': "parent1-2-1"
          },
          {
            'id': "parent1-2-2",
            'name': "parent1-2-2"
          },
        ]
      }
    ]
  },
  {
    'id': "parent2",
    'name': "parent2"
  }
]

checked_state = ["parent1-2-1", "parent1-2-2"]
def get_all_checked_nodes(data, checked_state, acc = None):
  if (acc == None):
    acc = []
  current_checked = []

  for node in data:
    if ("children" in node and len(node["children"]) > 0):
      inner_graph = get_all_checked_nodes(node["children"], checked_state, acc)

      if (len(node["children"]) == len(inner_graph['current_checked'])):
        checked = all(i['checked'] == True for i in inner_graph['current_checked'])
        item = {
          'id': node['id'],
          'checked': checked,
          'indeterminate': not checked,
          'has_children': True
        }
        acc.append(item)
        current_checked.append(item) 
      elif len(inner_graph['current_checked']) > 0:
        item = {
          'id': node['id'],
          'checked': False,
          'indeterminate': True,
          'has_children': True
        }
        acc.append(item)
        current_checked.append(item)
    elif (node['id'] in checked_state):
      item = {
          'id': node['id'],
          'checked': True,
          'indeterminate': False,
          'has_children': False
        }
      acc.append(item)
      current_checked.append(item)

  return {'current_checked':current_checked, 'result': acc}


print("result >>>>>>>>>>>>>>>>",get_all_checked_nodes(graph, checked_state))