# import json
# from django.utils.dateparse import parse_datetime
# from comments.models import Comment

# def import_comments():
#     with open('comments.json', 'r') as file:
#         comments = json.load(file)
#         for comment in comments:
#             comment['date'] = parse_datetime(comment['date'])
#             Comment.objects.create(**comment)

# if __name__ == "__main__":
#     import_comments()


# import json
# from django.utils.dateparse import parse_datetime
# from comments.models import Comment

# def import_comments():
#     with open('comments.json', 'r') as file:
#         comments = json.load(file)['comments']
#         for comment in comments:
#             try:
#                 comment['date'] = parse_datetime(comment['date'])
#                 # Exclude the 'id' field if your model doesn't have it
#                 comment.pop('id', None)
#                 Comment.objects.create(**comment)
#             except Exception as e:
#                 print(f"Error importing comment: {comment}")
#                 print(f"Exception: {e}")

# if __name__ == "__main__":
#     import_comments()

import os
import django
import json
from django.utils.dateparse import parse_datetime
from django.core.signals import request_started
from django.dispatch import receiver
from django.conf import settings

# Set up the Django environment
# os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'bobyard_backend.settings')
# django.setup()

from comments.models import Comment

#flag to check if import has ran already or not 
has_imported_comments = False

def import_comments():
    with open('comments.json', 'r') as file:
        comments = json.load(file)['comments']
        for comment in comments:
            comment_id = comment.pop('id')
            comment['date'] = parse_datetime(comment['date'])
            Comment.objects.update_or_create(id=comment_id, defaults=comment)

@receiver(request_started)
def import_comments_on_startup(sender, **kwargs):
    global has_imported_comments
    if not has_imported_comments:
        import_comments()  # Call your existing import_comments function
        has_imported_comments = True
        print("Comments imported successfully.")
        

if __name__ == "__main__":
    import_comments()

